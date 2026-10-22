# Generates the website's logo and favicon assets from the official STRIKE logo.
#
# Source of truth: public/assets/strike-logo.png (official logo, unmodified).
# Every output is a straight resample of that file: no recolouring, no redraw,
# aspect ratio preserved. Only transparent margin is trimmed: the source has
# stray export pixels at alpha 1/255 (0.4% opacity, invisible) far outside the
# mark, so the trim box is taken from pixels with alpha >= 2. Every visible
# pixel, including the anti-aliased edge, stays inside the box.
#
# Usage (Windows PowerShell 5.1+, no extra dependencies):
#   powershell -ExecutionPolicy Bypass -File scripts/generate-brand-assets.ps1

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root   = Split-Path -Parent $PSScriptRoot
$source = Join-Path $root "public\assets\strike-logo.png"
$public = Join-Path $root "public"
$assets = Join-Path $root "src\assets"

function Get-OpaqueBounds([System.Drawing.Bitmap]$bmp) {
  $rect = New-Object System.Drawing.Rectangle 0, 0, $bmp.Width, $bmp.Height
  $data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $bytes = New-Object byte[] ($data.Stride * $bmp.Height)
  [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)
  $bmp.UnlockBits($data)
  $minX = $bmp.Width; $minY = $bmp.Height; $maxX = -1; $maxY = -1
  for ($y = 0; $y -lt $bmp.Height; $y++) {
    $row = $y * $data.Stride
    for ($x = 0; $x -lt $bmp.Width; $x++) {
      if ($bytes[$row + $x * 4 + 3] -ge 2) {
        if ($x -lt $minX) { $minX = $x }; if ($x -gt $maxX) { $maxX = $x }
        if ($y -lt $minY) { $minY = $y }; if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }
  New-Object System.Drawing.Rectangle $minX, $minY, ($maxX - $minX + 1), ($maxY - $minY + 1)
}

# High-quality resample of $srcRect from $img into a $w x $h canvas at $dest.
function New-Resampled($img, [System.Drawing.Rectangle]$srcRect, [int]$w, [int]$h,
                       [System.Drawing.Rectangle]$dest, $background) {
  # Step down by halves first so small sizes stay crisp.
  $current = $img; $cur = $srcRect; $owned = $false
  while ($cur.Width / 2 -ge $dest.Width -and $cur.Height / 2 -ge $dest.Height -and $cur.Width -gt 2) {
    $nw = [int][Math]::Ceiling($cur.Width / 2); $nh = [int][Math]::Ceiling($cur.Height / 2)
    $step = New-Object System.Drawing.Bitmap $nw, $nh, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($step)
    $g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $attr = New-Object System.Drawing.Imaging.ImageAttributes
    $attr.SetWrapMode([System.Drawing.Drawing2D.WrapMode]::TileFlipXY)
    $g.DrawImage($current, (New-Object System.Drawing.Rectangle 0, 0, $nw, $nh),
      $cur.X, $cur.Y, $cur.Width, $cur.Height, [System.Drawing.GraphicsUnit]::Pixel, $attr)
    $g.Dispose()
    if ($owned) { $current.Dispose() }
    $current = $step; $owned = $true
    $cur = New-Object System.Drawing.Rectangle 0, 0, $nw, $nh
  }
  $out = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($out)
  if ($background) { $g.Clear($background) } else { $g.Clear([System.Drawing.Color]::Transparent) }
  $g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $attr = New-Object System.Drawing.Imaging.ImageAttributes
  $attr.SetWrapMode([System.Drawing.Drawing2D.WrapMode]::TileFlipXY)
  $g.DrawImage($current, $dest, $cur.X, $cur.Y, $cur.Width, $cur.Height,
    [System.Drawing.GraphicsUnit]::Pixel, $attr)
  $g.Dispose()
  if ($owned) { $current.Dispose() }
  $out
}

# Fit the trimmed logo, centred and aspect-preserved, into a square icon.
function New-SquareIcon($img, $bounds, [int]$size, [double]$padding, $background) {
  $avail = $size * (1 - 2 * $padding)
  $scale = [Math]::Min($avail / $bounds.Width, $avail / $bounds.Height)
  $dw = [int][Math]::Round($bounds.Width * $scale); $dh = [int][Math]::Round($bounds.Height * $scale)
  $dest = New-Object System.Drawing.Rectangle ([int](($size - $dw) / 2)), ([int](($size - $dh) / 2)), $dw, $dh
  New-Resampled $img $bounds $size $size $dest $background
}

function Get-PngBytes([System.Drawing.Bitmap]$bmp) {
  $ms = New-Object System.IO.MemoryStream
  $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
  # Leading comma stops PowerShell unrolling the byte[] into the pipeline.
  , [byte[]]$ms.ToArray()
}

# Multi-resolution .ico with PNG-encoded entries (supported by all current browsers).
function Write-Ico([string]$path, $pngs) {
  $fs = [System.IO.File]::Create($path); $bw = New-Object System.IO.BinaryWriter $fs
  $bw.Write([UInt16]0); $bw.Write([UInt16]1); $bw.Write([UInt16]$pngs.Count)
  $offset = 6 + 16 * $pngs.Count
  foreach ($p in $pngs) {
    $dim = if ($p.Size -ge 256) { 0 } else { $p.Size }
    $bw.Write([byte]$dim); $bw.Write([byte]$dim); $bw.Write([byte]0); $bw.Write([byte]0)
    $bw.Write([UInt16]1); $bw.Write([UInt16]32)
    $bw.Write([UInt32]$p.Bytes.Length); $bw.Write([UInt32]$offset)
    $offset += $p.Bytes.Length
  }
  foreach ($p in $pngs) { $bw.Write([byte[]]$p.Bytes, 0, $p.Bytes.Length) }
  $bw.Close(); $fs.Close()
}

$img = [System.Drawing.Bitmap]::FromFile($source)
$bounds = Get-OpaqueBounds $img
Write-Host "Source $($img.Width)x$($img.Height); logo bounds $($bounds.Width)x$($bounds.Height) at $($bounds.X),$($bounds.Y)"

# 1) Inline website mark: trimmed, aspect preserved, 128 px tall (sharp at 4x for 32 px).
$markH = 128
$markW = [int][Math]::Round($bounds.Width * $markH / $bounds.Height)
$mark = New-Resampled $img $bounds $markW $markH (New-Object System.Drawing.Rectangle 0, 0, $markW, $markH) $null
$mark.Save((Join-Path $assets "strike-logo-mark.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "src/assets/strike-logo-mark.png  ${markW}x${markH}"
$mark.Dispose()

# 2) favicon.ico (16/32/48) and a 192 px PNG icon, transparent background.
$icoEntries = @()
foreach ($s in 16, 32, 48) {
  $bmp = New-SquareIcon $img $bounds $s 0.02 $null
  $icoEntries += [pscustomobject]@{ Size = $s; Bytes = (Get-PngBytes $bmp) }
  $bmp.Dispose()
}
Write-Ico (Join-Path $public "favicon.ico") $icoEntries
Write-Host "public/favicon.ico  16/32/48"

$icon = New-SquareIcon $img $bounds 192 0.04 $null
$icon.Save((Join-Path $public "icon-192.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$icon.Dispose()
Write-Host "public/icon-192.png  192x192"

# 3) Apple touch icon: iOS renders transparency as black, so use a white tile.
$apple = New-SquareIcon $img $bounds 180 0.14 ([System.Drawing.Color]::White)
$apple.Save((Join-Path $public "apple-touch-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$apple.Dispose()
Write-Host "public/apple-touch-icon.png  180x180 (white background)"

$img.Dispose()
