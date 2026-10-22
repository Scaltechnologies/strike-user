import LegalContent from "../components/LegalContent";
import { TERMS_AND_CONDITIONS } from "../content/legal/termsAndConditions";

export default function TermsOfService() {
  return (
    <LegalContent
      eyebrow="Legal"
      title={TERMS_AND_CONDITIONS.title}
      intro={TERMS_AND_CONDITIONS.intro}
      effective={TERMS_AND_CONDITIONS.effectiveDate}
      updated={TERMS_AND_CONDITIONS.lastUpdated}
      sections={TERMS_AND_CONDITIONS.sections}
    />
  );
}
