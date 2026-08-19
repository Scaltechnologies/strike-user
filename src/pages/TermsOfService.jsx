import LegalContent from "../components/LegalContent";
import { CONTACT_EMAIL } from "../config/links";

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using the STRIKE website or app, you agree to these Terms of Service. If you do not agree, please do not use our services. This page is provided as a general overview and does not constitute legal advice.",
    ],
  },
  {
    heading: "Use of Services",
    paragraphs: [
      "STRIKE provides a platform to discover, subscribe to, and manage memberships from partner businesses. You agree to use the platform only for lawful purposes and in a way that doesn't infringe on the rights of others.",
    ],
  },
  {
    heading: "Accounts",
    paragraphs: [
      "You're responsible for maintaining the confidentiality of your account credentials and for all activity that happens under your account. Please let us know right away if you suspect any unauthorized use.",
    ],
  },
  {
    heading: "Memberships",
    paragraphs: [
      "Memberships available through STRIKE are offered by partner businesses. STRIKE facilitates discovery, subscription, and management of these memberships, but the specific terms, benefits, and availability of each membership are set by the respective business.",
    ],
  },
  {
    heading: "Payments",
    paragraphs: [
      "Payments made through STRIKE are processed securely via our payment partners. Membership fees, renewal terms, and refund eligibility depend on the specific membership and business you've subscribed to.",
    ],
  },
  {
    heading: "User Responsibilities",
    paragraphs: ["When using STRIKE, you agree to:"],
    list: [
      "Provide accurate and up-to-date account information.",
      "Use your membership passes and QR codes only for your own account.",
      "Not attempt to misuse, disrupt, or reverse-engineer the platform.",
    ],
  },
  {
    heading: "Limitations",
    paragraphs: [
      "STRIKE is provided on an \"as is\" basis. We work hard to keep the platform reliable, but we don't guarantee uninterrupted access and aren't liable for issues arising from partner businesses' own products or services.",
    ],
  },
  {
    heading: "Termination",
    paragraphs: [
      "You may stop using STRIKE at any time. We may suspend or terminate accounts that violate these terms or are used in ways that put the platform or other users at risk.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `If you have any questions about these Terms of Service, please contact us at ${CONTACT_EMAIL}.`,
    ],
  },
];

export default function TermsOfService() {
  return (
    <LegalContent
      eyebrow="Legal"
      title="Terms of Service"
      intro="The terms that govern your use of STRIKE."
      updated="August 2026"
      sections={SECTIONS}
    />
  );
}
