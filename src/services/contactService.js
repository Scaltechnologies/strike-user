// Contact form service layer.
//
// There is no backend endpoint for contact messages, so the form hands the
// message to the visitor's own email app via a mailto: link addressed to the
// support inbox. Nothing is sent until the visitor presses Send in that app,
// and the UI says so. Replace this with a real API call once a backend
// endpoint exists — and only then show a "message sent" confirmation.

import { CONTACT_EMAIL } from "../config/links";

/**
 * @param {{ name: string, email: string, phone: string, subject: string, message: string }} data
 * @returns {{ to: string, subject: string, body: string, mailto: string }}
 */
export function buildContactEmail(data) {
  const subject = `[Website enquiry] ${data.subject.trim()}`;
  const body = [
    data.message.trim(),
    "",
    "—",
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    data.phone.trim() ? `Phone: ${data.phone.trim()}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return {
    to: CONTACT_EMAIL,
    subject,
    body,
    mailto: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
