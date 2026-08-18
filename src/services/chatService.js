// Chat service layer for the Support Hub assistant.
//
// This is a mock implementation — there is no AI backend connected yet.
// `sendMessage` is the single seam the UI talks to; swap its body for a
// real API call (e.g. fetch to an LLM/support backend) and nothing in
// SupportHub.jsx needs to change.

export const SUPPORT_CATEGORIES = [
  {
    id: "membership",
    label: "Membership Help",
    description: "Access, renewal, cancellation, and general membership questions.",
    prompt: "I have a question about one of my memberships.",
  },
  {
    id: "recommendations",
    label: "Recommendations",
    description: "Get suggestions based on what you're interested in.",
    prompt: "I want a gym membership near me.",
  },
  {
    id: "account",
    label: "Account Help",
    description: "Account access, membership status, and general usage.",
    prompt: "I need help with my account.",
  },
  {
    id: "fraud",
    label: "Fraud / Suspicious Activity",
    description: "Report unauthorized transactions or suspicious activity.",
    prompt: "I want to report suspicious activity on my account.",
  },
  {
    id: "feedback",
    label: "Feedback",
    description: "Share feedback or suggestions about STRIKE.",
    prompt: "I'd like to share some feedback about STRIKE.",
  },
];

const KEYWORD_RESPONSES = [
  {
    keywords: ["fraud", "suspicious", "unauthorized", "scam", "hacked", "stolen"],
    reply:
      "I'm sorry to hear that. For anything involving suspicious activity or unauthorized transactions, please contact our support team directly at support.striketechnologies@gmail.com with as much detail as you can (dates, amounts, and what you noticed) — our team will investigate and follow up with you.",
  },
  {
    keywords: ["recommend", "suggest", "near me", "looking for", "find a", "find me"],
    reply:
      "I can help point you in the right direction. Open the Discover tab in the STRIKE app to browse memberships by category and location — fitness, salons, restaurants, and retail are all there. Once real-time recommendations are connected here, I'll be able to suggest options directly in this chat.",
  },
  {
    keywords: ["cancel", "renew", "pause", "subscription", "access", "expire", "membership"],
    reply:
      "Memberships can usually be viewed, renewed, paused, or cancelled from your STRIKE wallet in the app. If you're stuck on a specific membership, let me know which one and what you're trying to do, or reach our team at support.striketechnologies@gmail.com for help.",
  },
  {
    keywords: ["account", "login", "password", "sign in", "email", "profile"],
    reply:
      "For account access issues, try the 'Forgot password' option on the sign-in screen first. If you're still locked out or something looks wrong with your account, email support.striketechnologies@gmail.com and our team will help you sort it out.",
  },
  {
    keywords: ["feedback", "suggestion", "idea", "improve", "love", "hate", "bug"],
    reply:
      "Thanks for sharing — feedback like this genuinely shapes what we build next. Feel free to add any more detail, or send it directly to support.striketechnologies@gmail.com so our team has it on record.",
  },
];

const DEFAULT_REPLY =
  "Thanks for reaching out. I'm a support assistant here to point you in the right direction — for anything I can't fully resolve, our team is always reachable at support.striketechnologies@gmail.com.";

function pickReply(message) {
  const lower = message.toLowerCase();
  const match = KEYWORD_RESPONSES.find((entry) =>
    entry.keywords.some((k) => lower.includes(k))
  );
  return match ? match.reply : DEFAULT_REPLY;
}

/**
 * Sends a message to the support assistant and resolves with its reply.
 * @param {string} message
 * @param {{role: "user" | "assistant", text: string}[]} history
 * @returns {Promise<{text: string}>}
 */
export function sendMessage(message, history = []) {
  void history; // unused by the mock, kept in the signature for a real API
  return new Promise((resolve, reject) => {
    const delay = 600 + Math.random() * 700;
    setTimeout(() => {
      if (!message || !message.trim()) {
        reject(new Error("Empty message"));
        return;
      }
      resolve({ text: pickReply(message) });
    }, delay);
  });
}
