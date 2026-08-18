// Contact form service layer — mock implementation.
//
// There's no backend wired up yet, so this simulates a network call and
// resolves successfully for well-formed submissions. Replace the body of
// `submitContactForm` with a real API call once a backend endpoint exists;
// the Contact page only depends on this function's shape (a Promise that
// resolves or rejects), not on how it's implemented.

/**
 * @param {{ name: string, email: string, phone: string, subject: string, message: string }} data
 * @returns {Promise<{ ok: true }>}
 */
export function submitContactForm(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data.name || !data.email || !data.subject || !data.message) {
        reject(new Error("Missing required fields"));
        return;
      }
      resolve({ ok: true });
    }, 700 + Math.random() * 500);
  });
}
