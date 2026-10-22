// Integrity checks for the legal documents in src/content/legal.
// Run with: npm run check:legal
//
// Guards against accidental truncation, dropped sections, duplicated
// paragraphs, broken "Section N" cross-references and contact drift.

import { readFileSync } from "node:fs";
import { PRIVACY_POLICY } from "../src/content/legal/privacyPolicy.js";
import { TERMS_AND_CONDITIONS } from "../src/content/legal/termsAndConditions.js";
import { ACCOUNT_DELETION, DELETION_MAILTO } from "../src/content/legal/accountDeletion.js";

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
const failures = [];
const warnings = [];
const check = (ok, msg) => ok || failures.push(msg);

const textOf = (t) =>
  Array.isArray(t) ? t.map((p) => (typeof p === "string" ? p : p.b ?? p.i ?? p.a ?? "")).join("") : t;
const linksOf = (t) => (Array.isArray(t) ? t.filter((p) => p?.a).map((p) => p.to) : []);

function flatten(doc) {
  const headings = [];
  const texts = [];
  const ids = [];
  const links = [];
  const visit = (s) => {
    headings.push(s.heading);
    if (s.id) ids.push(s.id);
    for (const b of s.blocks ?? []) {
      const parts = b.items ?? [b.text];
      parts.forEach((p) => {
        texts.push(textOf(p));
        links.push(...linksOf(p));
      });
    }
    (s.subsections ?? []).forEach(visit);
  };
  doc.sections.forEach(visit);
  return { headings, texts, ids, links };
}

// Internal drafting notes that should not stay in published text once the
// underlying fact has been verified. Reported as release blockers.
const DRAFTING_NOTES = [
  /must be confirmed before the application is published/,
  /subject to confirmation of the exact registered legal name/,
  /The Privacy Policy should identify relevant providers/,
  /The Privacy Policy should be accessible from the Platform/,
];

const EXPECTED = {
  "Privacy Policy": [
    "1. Introduction", "2. Scope and Applicability", "3. Information We Collect",
    "3.1 Account and Registration Information", "3.2 Address and Location Information",
    "3.3 Transaction and Purchase Information", "3.4 Payment Information",
    "3.5 Camera and QR-Code Information", "3.6 Device, Technical and Usage Information",
    "3.7 Communications and Customer Support", "3.8 Vendor and Business Information",
    "4. How We Use Your Information", "5. Cookies and Similar Technologies",
    "6. How We Share Your Information", "6.1 Participating Vendors and Businesses",
    "6.2 Payment Service Providers", "6.3 Authentication, Hosting and Technical Service Providers",
    "6.4 Legal and Regulatory Authorities", "6.5 Business Transfers",
    "6.6 With Your Direction or Consent", "7. Location Permissions and User Control",
    "8. Data Retention and Deletion", "Account Deletion", "9. Data Security",
    "10. Third-Party Services and External Links", "11. Children and Minors",
    "12. Your Privacy Rights and Choices", "13. Data Protection and Applicable Law",
    "14. Cross-Border Processing", "15. Changes to This Privacy Policy",
    "16. Grievance Redressal and Contact Information", "17. Your Acknowledgement",
  ],
  "Terms & Conditions": [
    "Welcome to STRIKE", "1. About STRIKE", "2. Participating Vendors", "3. Eligibility",
    "4. STRIKE Account", "5. Digital Memberships", "6. Prepaid Memberships and Consumption Units",
    "7. Membership Benefits", "8. Purchase and Payment", "9. Pricing and Promotions",
    "10. Redemption", "12. Unauthorised Use and Fraud", "13. Cancellation and Refunds",
    "14. Vendor Closure or Service Failure", "15. Service Availability",
    "16. Customer Responsibilities", "17. Intellectual Property",
    "18. User Content, Reviews and Feedback", "19. Platform Availability",
    "20. Third-Party Services", "21. STRIKE’s Role and Vendor Responsibility",
    "22. Limitation of Liability", "23. Fraud, Security and Misuse",
    "24. Suspension and Termination", "25. Privacy", "26. Complaints and Grievance Redressal",
    "27. Changes to These Terms", "28. Governing Law and Jurisdiction", "29. Severability",
    "30. Entire Agreement", "31. Contact and Legal Information",
  ],
};

// Minimum rendered word counts (source counts minus nothing) — catches truncation.
const MIN_WORDS = { "Privacy Policy": 3200, "Terms & Conditions": 2600 };

const contactEmail = read("src/config/links.js").match(/CONTACT_EMAIL = "([^"]+)"/)?.[1];
const app = read("src/App.jsx");
const footer = read("src/components/Footer.jsx");
const routes = [...app.matchAll(/path="(\/[^"]*)"/g)].map((m) => m[1]);

// Every link inside legal text must point at a real route (+ existing anchor), mailto or tel.
function checkLinks(name, links) {
  const anchors = {
    "/privacy": flatten(PRIVACY_POLICY).ids,
    "/terms": flatten(TERMS_AND_CONDITIONS).ids,
    "/delete-account": flatten(ACCOUNT_DELETION).ids,
  };
  for (const to of links) {
    if (/^(mailto:|tel:\+91\d{10}$)/.test(to)) continue;
    const [path, hash] = to.split("#");
    check(routes.includes(path), `${name}: link to unknown route "${to}"`);
    if (hash) check(anchors[path]?.includes(hash), `${name}: link to missing anchor "${to}"`);
  }
}

for (const doc of [PRIVACY_POLICY, TERMS_AND_CONDITIONS]) {
  const name = doc.title;
  const { headings, texts, ids, links } = flatten(doc);
  const all = texts.join("\n");
  checkLinks(name, links);
  for (const re of DRAFTING_NOTES) {
    if (texts.some((t) => re.test(t))) warnings.push(`${name}: drafting note still published: "${re.source}…"`);
  }

  check(JSON.stringify(headings) === JSON.stringify(EXPECTED[name]),
    `${name}: section headings differ from the approved structure:\n  ${headings.join("\n  ")}`);

  texts.forEach((t, i) => check(typeof t === "string" && t.trim().length > 0, `${name}: empty text block #${i}`));

  const seen = new Set();
  for (const t of texts) {
    if (t.length > 40 && seen.has(t)) failures.push(`${name}: duplicated paragraph: "${t.slice(0, 60)}…"`);
    seen.add(t);
  }

  check(new Set(ids).size === ids.length, `${name}: duplicate section ids`);

  const numbers = headings.map((h) => h.match(/^(\d+)\.\s/)?.[1]).filter(Boolean).map(Number);
  for (const ref of all.matchAll(/Section (\d+)/g)) {
    check(numbers.includes(Number(ref[1])), `${name}: cross-reference "Section ${ref[1]}" has no matching section`);
  }
  for (let n = 1; n <= Math.max(...numbers); n++) {
    if (!numbers.includes(n)) warnings.push(`${name}: no Section ${n} (numbering gap kept as supplied)`);
  }

  const words = all.split(/\s+/).length + headings.join(" ").split(/\s+/).length;
  check(words >= MIN_WORDS[name], `${name}: only ${words} words — content may be truncated`);

  check(all.includes(contactEmail), `${name}: support email ${contactEmail} not found`);
  check(!/TODO|lorem|example\.com/i.test(all), `${name}: placeholder text found`);

  if (!doc.lastUpdated) warnings.push(`${name}: no "Last updated" date supplied`);
  if (!doc.effectiveDate) warnings.push(`${name}: no effective date supplied`);
}

const terms = flatten(TERMS_AND_CONDITIONS).texts.join("\n");
for (const s of ["Strike Technologies Private Limited", "8143604709", "523155", "www.strikeapp.in"]) {
  check(terms.includes(s), `Terms & Conditions: missing contact/legal detail "${s}"`);
}

// Account-deletion page: real process only, no unverified promises.
{
  const name = ACCOUNT_DELETION.title;
  const { texts, ids, links } = flatten(ACCOUNT_DELETION);
  const all = texts.join("\n");
  check(new Set(ids).size === ids.length, `${name}: duplicate section ids`);
  checkLinks(name, links);
  check(all.includes(contactEmail), `${name}: support email ${contactEmail} not found`);
  check(DELETION_MAILTO.startsWith(`mailto:${contactEmail}?`), `${name}: mailto does not target ${contactEmail}`);
  const FORBIDDEN = [
    [/\bwithin \d+\s*(business |working )?(days?|hours?|weeks?)\b/i, "a fixed completion period"],
    [/\b(is|are|will be) (permanently |immediately |automatically )+(deleted|erased|removed)\b/i, "automatic/immediate deletion"],
    [/\b(all|every) (of )?your (data|information)\b[^.]*\b(deleted|erased)\b/i, "deletion of all data"],
    [/\bacross (all|every) (service|system)s?\b/i, "deletion across every service"],
    [/\b(tap|go to|open) [^.]*\bdelete account\b/i, "an unverified in-app deletion option"],
  ];
  for (const [re, what] of FORBIDDEN) check(!re.test(all), `${name}: claims ${what} — not verified`);
  check(flatten(PRIVACY_POLICY).links.includes("/delete-account"), "Privacy Policy §8 does not link to /delete-account");
}

for (const route of ["/privacy", "/terms", "/delete-account", "/cookies"]) {
  check(routes.includes(route), `App.jsx: no route for ${route}`);
  check(footer.includes(`to: "${route}"`), `Footer.jsx: no link to ${route}`);
}

const cookiePage = read("src/pages/CookiePolicy.jsx");
check(!/Analytics cookies —|Preference cookies —/.test(cookiePage), "Cookie Policy claims cookie types the website does not set");
check(/<title>STRIKE<\/title>/.test(read("index.html")), "index.html <title> is not the STRIKE brand name");

warnings.forEach((w) => console.warn(`WARN  ${w}`));
if (failures.length) {
  failures.forEach((f) => console.error(`FAIL  ${f}`));
  process.exit(1);
}
console.log(`OK    legal content checks passed (${warnings.length} warning(s))`);
