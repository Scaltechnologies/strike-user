// Canonical source for the public account-deletion instructions (/delete-account).
//
// Statements are limited to the deletion process that actually exists — an
// email request to the support address, handled by the support team — and to
// wording already approved in the Privacy Policy (§8, §12, §16). Do not add an
// in-app option, a completion timeline or claims about automatic or complete
// deletion unless they have been verified. Checked by scripts/check-legal.mjs.
//
// Block shapes are documented in ./privacyPolicy.js.

export const DELETION_EMAIL = "support.striketechnologies@gmail.com";
export const DELETION_SUBJECT = "Account deletion request";
const DELETION_BODY = [
  "Please delete my STRIKE account and the personal information associated with it.",
  "",
  "Registered mobile number:",
  "Account type (customer / business):",
  "Business name (business accounts only):",
].join("\n");

export const DELETION_MAILTO =
  `mailto:${DELETION_EMAIL}` +
  `?subject=${encodeURIComponent(DELETION_SUBJECT)}` +
  `&body=${encodeURIComponent(DELETION_BODY)}`;

export const ACCOUNT_DELETION = {
  title: "Delete Your Account",
  intro:
    "How to ask STRIKE to delete your account and the personal information associated with it.",
  effectiveDate: null,
  lastUpdated: "22 October 2026",
  sections: [
    {
      id: "who-this-applies-to",
      heading: "Who this applies to",
      blocks: [
        { type: "p", text: "This page applies to STRIKE customer accounts and to accounts used by representatives of participating businesses (vendors). You do not need the STRIKE app installed to make a request." },
        { type: "p", text: "Signing out of the app or uninstalling it does not delete your account." },
      ],
    },
    {
      id: "how-to-request-deletion",
      heading: "How to request deletion",
      blocks: [
        {
          type: "ol",
          items: [
            ["Email ", { a: DELETION_EMAIL, to: DELETION_MAILTO }, " with the subject “", { b: DELETION_SUBJECT }, "”."],
            "Send it from the email address linked to your STRIKE account, if you have one, and include the mobile number registered to your account. Business accounts should also include the business name.",
            "We may request reasonable information to verify your identity and protect your account before acting on your request.",
          ],
        },
        { type: "p", text: "Do not include passwords, one-time passwords (OTPs), UPI PINs, complete card details or other authentication secrets in your email." },
      ],
    },
    {
      id: "what-happens-next",
      heading: "What happens next",
      blocks: [
        { type: "p", text: "Deletion requests are reviewed by the STRIKE support team. Sending a request does not delete your account automatically, and your account remains in place until the request has been processed." },
        { type: "p", text: "We will respond within the period prescribed by applicable law." },
      ],
    },
    {
      id: "what-is-deleted-and-what-may-be-kept",
      heading: "What is deleted and what may be kept",
      blocks: [
        { type: "p", text: "Account deletion requests will be processed in accordance with applicable law and the Platform's operational requirements. Information that must lawfully be retained for financial records, fraud prevention, dispute resolution or other legal obligations may be retained for the necessary period, with access and use appropriately restricted where required." },
        { type: "p", text: "Deleting your account may result in the loss of access to unused offers, memberships, meal-plan benefits or other account-linked entitlements, subject to applicable consumer rights and the relevant terms." },
      ],
    },
    {
      id: "deleting-or-correcting-specific-information",
      heading: "Deleting or correcting specific information",
      blocks: [
        { type: "p", text: "If you want to keep your account but ask for correction of inaccurate information, or deletion of specific personal information where legally available, email the same address and describe what you would like changed." },
      ],
    },
    {
      id: "more-information",
      heading: "More information",
      blocks: [
        {
          type: "p",
          text: [
            "Our ",
            { a: "Privacy Policy", to: "/privacy#data-retention-and-deletion" },
            " explains how STRIKE retains and deletes personal information and the rights available to you. For questions, contact ",
            { a: DELETION_EMAIL, to: `mailto:${DELETION_EMAIL}` },
            " or call ",
            { a: "8143604709", to: "tel:+918143604709" },
            ".",
          ],
        },
      ],
    },
  ],
};
