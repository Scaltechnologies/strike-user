import LegalContent from "../components/LegalContent";
import { CONTACT_EMAIL } from "../config/links";

// Describes what this website actually does, verified against the production
// build: no first-party cookies, no local/session storage, no analytics or
// advertising scripts; the only third-party requests are to Google Fonts.
// Re-verify and update this page before adding any analytics, ads or embeds.
const SECTIONS = [
  {
    id: "what-cookies-are",
    heading: "What Cookies Are",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. Similar technologies, such as your browser's local storage, can be used for the same purposes.",
    ],
  },
  {
    id: "cookies-on-this-website",
    heading: "Cookies on This Website",
    paragraphs: [
      "This website (www.strikeapp.in) does not currently set any cookies. It does not use analytics, advertising or tracking cookies, and it does not store information in your browser's local or session storage.",
    ],
  },
  {
    id: "third-party-services",
    heading: "Third-Party Services",
    blocks: [
      { type: "p", text: "Pages on this website load fonts from Google Fonts (fonts.googleapis.com and fonts.gstatic.com). When your browser requests these fonts, Google receives the technical information that accompanies any web request, such as your IP address and browser details. No cookies are set by these requests. Google's handling of this information is governed by its own privacy policy." },
      { type: "p", text: "Links on this website may take you to other services, such as app stores or your email app. Those services may use their own cookies under their own policies." },
    ],
  },
  {
    id: "the-strike-apps",
    heading: "The STRIKE Apps",
    blocks: [
      {
        type: "p",
        text: [
          "This Cookie Policy covers this website only. How STRIKE processes information in its apps and services is described in our ",
          { a: "Privacy Policy", to: "/privacy" },
          ".",
        ],
      },
    ],
  },
  {
    id: "managing-cookies",
    heading: "Managing Cookies",
    paragraphs: [
      "Most browsers let you view, block or delete cookies through their settings. If this website starts using cookies or similar technologies, this page will be updated to describe them.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    blocks: [
      {
        type: "p",
        text: [
          "If you have any questions about this Cookie Policy, please contact us at ",
          { a: CONTACT_EMAIL, to: `mailto:${CONTACT_EMAIL}` },
          ".",
        ],
      },
    ],
  },
];

export default function CookiePolicy() {
  return (
    <LegalContent
      eyebrow="Legal"
      title="Cookie Policy"
      intro="How STRIKE uses cookies on this website."
      updated="22 October 2026"
      sections={SECTIONS}
    />
  );
}
