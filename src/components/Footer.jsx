import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_LINK, LINKEDIN_URL } from "../config/links";

function LinkedinIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.5V23H.24V8.25ZM8.25 8.25h4.3v2.01h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.5v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V23h-4.5V8.25Z" />
    </svg>
  );
}

const LINK_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "Careers", to: "/careers" },
      { label: "Newsroom", to: "/newsroom" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [{ label: "Explore Solutions", to: "/explore" }],
  },
  {
    title: "Support",
    links: [{ label: "Support Hub", to: "/support" }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Cookie Settings", to: "/cookies" },
      { label: "Compliance", to: "/compliance" },
    ],
  },
];

const CONTACT_ICONS = [
  { label: "Email", Icon: Mail, href: `mailto:${CONTACT_EMAIL}` },
  { label: "Contact", Icon: Phone, href: CONTACT_LINK },
  { label: "LinkedIn", Icon: LinkedinIcon, href: LINKEDIN_URL },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#171310] px-6 pt-20 pb-8 text-white/70">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2 lg:pr-10">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
              STRIKE
            </Link>
            <p className="mt-3 text-sm font-semibold text-[#FF6B35]">
              Memberships you love. Made simple.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Discover, join, and manage the memberships you love — all from
              one simple, seamless platform.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <Mail size={15} />
                <span>{CONTACT_EMAIL}</span>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3">
              {CONTACT_ICONS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white/5 transition-colors hover:bg-white/10"
                >
                  <Icon size={15} />
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

        <div className="mt-16 flex items-center justify-center border-t border-white/10 pt-8 text-xs text-white/40">
          <span>© 2026 Strike. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}