import LegalContent from "../components/LegalContent";
import { CONTACT_EMAIL } from "../config/links";

const SECTIONS = [
  {
    heading: "What Cookies Are",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. They help the site remember information about your visit, which can make your next visit easier and the site more useful to you.",
    ],
  },
  {
    heading: "How We Use Cookies",
    paragraphs: [
      "STRIKE uses cookies to keep the website running smoothly, remember your preferences, and understand how the site is used so we can keep improving it.",
    ],
  },
  {
    heading: "Types of Cookies",
    paragraphs: ["We may use the following types of cookies:"],
    list: [
      "Essential cookies — needed for core site functionality.",
      "Preference cookies — remember choices you've made on the site.",
      "Analytics cookies — help us understand how visitors use the site.",
    ],
  },
  {
    heading: "Managing Cookies",
    paragraphs: [
      "Most browsers let you control cookies through their settings, including blocking or deleting them. Note that disabling certain cookies may affect how well the site works.",
    ],
  },
  {
    heading: "Third-party Cookies",
    paragraphs: [
      "Some cookies may be set by third-party services we use, such as analytics providers. These third parties have their own privacy and cookie practices, which we encourage you to review.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `If you have any questions about this Cookie Policy, please contact us at ${CONTACT_EMAIL}.`,
    ],
  },
];

export default function CookiePolicy() {
  return (
    <LegalContent
      eyebrow="Legal"
      title="Cookie Policy"
      intro="How STRIKE uses cookies on this website."
      updated="August 2026"
      sections={SECTIONS}
    />
  );
}
