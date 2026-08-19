import LegalContent from "../components/LegalContent";
import { CONTACT_EMAIL } from "../config/links";

const SECTIONS = [
  {
    heading: "Introduction",
    paragraphs: [
      "This Privacy Policy explains how STRIKE (\"we\", \"us\", or \"our\") collects, uses, and protects information when you use our website and mobile app. This page is provided as a general overview and does not constitute legal advice.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: ["We may collect the following types of information:"],
    list: [
      "Account details, such as your name, email address, and phone number.",
      "Membership and transaction information related to the memberships you subscribe to.",
      "Device and usage information, such as app activity and general location.",
      "Any information you share with us directly, such as support requests or feedback.",
    ],
  },
  {
    heading: "How We Use Information",
    paragraphs: ["We use the information we collect to:"],
    list: [
      "Provide, maintain, and improve the STRIKE app and website.",
      "Process memberships, subscriptions, and payments.",
      "Communicate with you about your account, support requests, and updates.",
      "Keep the platform secure and prevent misuse.",
    ],
  },
  {
    heading: "Data Sharing",
    paragraphs: [
      "We do not sell your personal information. We may share limited information with partner businesses to fulfil a membership you've subscribed to, and with service providers who help us operate the platform (such as payment processors and hosting providers), under appropriate confidentiality obligations.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We use reasonable technical and organizational measures to protect your information. No method of transmission or storage is completely secure, but we work to keep your data safe and to continuously improve our practices.",
    ],
  },
  {
    heading: "User Rights",
    paragraphs: [
      "Depending on your location, you may have the right to access, correct, or request deletion of your personal information. You can reach out to us at any time to make such a request.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `If you have any questions about this Privacy Policy, please contact us at ${CONTACT_EMAIL}.`,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalContent
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How STRIKE collects, uses, and protects your information."
      updated="August 2026"
      sections={SECTIONS}
    />
  );
}
