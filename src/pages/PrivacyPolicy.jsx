import LegalContent from "../components/LegalContent";
import { PRIVACY_POLICY } from "../content/legal/privacyPolicy";

export default function PrivacyPolicy() {
  return (
    <LegalContent
      eyebrow="Legal"
      title={PRIVACY_POLICY.title}
      intro={PRIVACY_POLICY.intro}
      effective={PRIVACY_POLICY.effectiveDate}
      updated={PRIVACY_POLICY.lastUpdated}
      sections={PRIVACY_POLICY.sections}
    />
  );
}
