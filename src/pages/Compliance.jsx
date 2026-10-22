import LegalContent from "../components/LegalContent";
import { CONTACT_EMAIL } from "../config/links";

const SECTIONS = [
  {
    heading: "Our Approach",
    paragraphs: [
      "STRIKE is committed to operating responsibly and in line with applicable laws and regulations as we grow. This page gives a general overview of that commitment — it isn't a substitute for legal or regulatory advice.",
    ],
  },
  {
    heading: "Data Protection",
    paragraphs: [
      "We aim to handle member and partner data responsibly, in line with the practices described in our Privacy Policy and Cookie Policy.",
    ],
  },
  {
    heading: "Payment Security",
    paragraphs: [
      "Payments made through STRIKE are processed through established, secure payment partners rather than handled or stored directly on our own servers.",
    ],
  },
  {
    heading: "Partner Standards",
    paragraphs: [
      "We work with partner businesses to make sure memberships offered through STRIKE are represented accurately and delivered as described.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `If you have a compliance-related question or concern, please reach out to us at ${CONTACT_EMAIL}.`,
    ],
  },
];

export default function Compliance() {
  return (
    <LegalContent
      eyebrow="Legal"
      title="Compliance"
      intro="An overview of how STRIKE approaches data, payments, and partner standards."
      updated="August 2026"
      sections={SECTIONS}
    />
  );
}
