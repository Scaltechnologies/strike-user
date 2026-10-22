import { Mail } from "lucide-react";
import LegalContent from "../components/LegalContent";
import CopyButton from "../components/CopyButton";
import {
  ACCOUNT_DELETION,
  DELETION_EMAIL,
  DELETION_MAILTO,
  DELETION_SUBJECT,
} from "../content/legal/accountDeletion";

export default function DeleteAccount() {
  return (
    <LegalContent
      eyebrow="Account"
      title={ACCOUNT_DELETION.title}
      intro={ACCOUNT_DELETION.intro}
      effective={ACCOUNT_DELETION.effectiveDate}
      updated={ACCOUNT_DELETION.lastUpdated}
      sections={ACCOUNT_DELETION.sections}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-5 rounded-[1.75rem] border border-[#FFD9C7] bg-[#FFF6F0] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="min-w-0">
          <p className="text-base font-bold text-[#1A1006]">Request deletion by email</p>
          <p className="mt-1 text-sm leading-relaxed text-[#3A2A18]/70">
            Send your request to{" "}
            <span className="break-all font-semibold text-[#1A1006] select-all">{DELETION_EMAIL}</span>{" "}
            with the subject “{DELETION_SUBJECT}”.
          </p>
          <CopyButton text={DELETION_EMAIL} label="Copy email address" className="mt-3" />
        </div>
        <a
          href={DELETION_MAILTO}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(255,107,53,0.3)] transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]/50 focus-visible:ring-offset-2"
        >
          <Mail size={16} />
          Email a deletion request
        </a>
      </div>
    </LegalContent>
  );
}
