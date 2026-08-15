import { Link } from "react-scroll";
import { Mail, MapPin } from "lucide-react";

const BRAND = "#FF6B35";

const LINK_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "about" },
      { label: "Careers" },
      { label: "Newsroom" },
      { label: "Contact" },
    ],
  },
  {
    title: "Customers",
    links: [
      { label: "Explore", to: "explore" },
      { label: "Pricing", to: "pricing" },
      { label: "Membership Perks", to: "categories" },
      { label: "Support Hub" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy" },
      { label: "Terms of Service" },
      { label: "Cookie Settings" },
      { label: "Compliance" },
    ],
  },
];

const SOCIALS = [
  {
    label: "X",
    path: "M18.24 2H21.5l-7.3 8.34L22.8 22h-6.77l-5.3-6.93L4.6 22H1.33l7.8-8.92L1.2 2h6.94l4.79 6.34L18.24 2Zm-1.19 18h1.86L7.05 3.9H5.05L17.05 20Z",
  },
  {
    label: "Instagram",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77a4.9 4.9 0 0 1 1.77-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM17.4 6.6a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34Z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.5V23H.24V8.25ZM8.25 8.25h4.3v2.01h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.5v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V23h-4.5V8.25Z",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#171310] px-6 pt-20 pb-8 text-white/70">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2 lg:pr-10">
            <span className="text-2xl font-black tracking-tight text-white">STRIKE</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              The premium marketplace for exclusive
memberships and corporate growth.
Redefining how professionals connect
with high-tier opportunities.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <Mail size={15} />
                <span>support.striketechnologies@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={15} />
                <span>Available in 50+ cities worldwide</span>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-white/5 transition-colors hover:bg-white/10"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                {col.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3.5">
                {col.links.map((link) =>
                  link.to ? (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        smooth
                        duration={450}
                        offset={-100}
                        className="cursor-pointer text-sm transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <span className="cursor-default text-sm transition-colors hover:text-white">
                        {link.label}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <span>© 2026 Strike. All rights reserved.</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
