import { useState } from "react";
import { Check, Copy } from "lucide-react";

// Copies `text` to the clipboard. Falls back to a visible "select and copy"
// hint when the Clipboard API is unavailable (e.g. non-HTTPS or blocked).
export default function CopyButton({ text, label = "Copy", className = "" }) {
  const [state, setState] = useState("idle"); // idle | copied | failed

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2500);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-[#EFE6DC] bg-white px-3 py-1.5 text-xs font-semibold text-[#3A2A18]/80 transition-colors hover:border-[#FF6B35]/50 hover:text-[#FF6B35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]/40 ${className}`}
    >
      {state === "copied" ? <Check size={13} /> : <Copy size={13} />}
      <span aria-live="polite">
        {state === "copied" ? "Copied" : state === "failed" ? "Select and copy manually" : label}
      </span>
    </button>
  );
}
