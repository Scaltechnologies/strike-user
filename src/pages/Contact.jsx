import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, CheckCircle2, AlertCircle, Send } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { CONTACT_EMAIL } from "../config/links";
import { submitContactForm } from "../services/contactService";

const EMPTY_FORM = { name: "", email: "", phone: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = "That email doesn't look right.";
  if (form.phone.trim() && !PHONE_RE.test(form.phone.trim()))
    errors.phone = "That phone number doesn't look right.";
  if (!form.subject.trim()) errors.subject = "Please add a subject.";
  if (!form.message.trim()) errors.message = "Please add a message.";
  else if (form.message.trim().length < 10) errors.message = "Please add a bit more detail.";
  return errors;
}

function Field({ label, name, value, onChange, error, type = "text", textarea, optional }) {
  const Component = textarea ? "textarea" : "input";
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-[#1A1006]">
        {label} {optional && <span className="font-normal text-[#3A2A18]/40">(optional)</span>}
      </label>
      <Component
        id={name}
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-[#FCFAF8] px-4 py-2.5 text-sm text-[#1A1006] outline-none transition-colors placeholder:text-[#3A2A18]/35 ${
          error
            ? "border-[#E4562A]/60 focus:border-[#E4562A]"
            : "border-[#EFE6DC] focus:border-[#FF6B35]/50"
        } ${textarea ? "resize-none" : ""}`}
      />
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-[#AC2D00]">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fieldErrors = validate(form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitContactForm(form);
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full bg-[#FCFAF8]">
      <PageHeader />

      <section className="px-6 pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: intro + info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B35]">
              Get in touch
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-[#1A1006]">
              Contact STRIKE
            </h1>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#3A2A18]/70">
              Questions about memberships, partnerships, or anything else?
              Send us a message and our team will get back to you.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-start gap-3 rounded-2xl border border-[#EFE6DC] bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF3E9]">
                  <Mail size={17} className="text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1006]">Email us</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-[#3A2A18]/70 transition-colors hover:text-[#FF6B35]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#EFE6DC] bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF3E9]">
                  <MessageCircle size={17} className="text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1006]">Prefer live help?</p>
                  <a
                    href="/support"
                    className="text-sm text-[#3A2A18]/70 transition-colors hover:text-[#FF6B35]"
                  >
                    Visit our Support Hub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[1.75rem] border border-[#EFE6DC] bg-white p-6 shadow-[0_20px_50px_rgba(26,16,6,0.06)] sm:p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E9F7EF]">
                  <CheckCircle2 size={28} className="text-[#22C55E]" />
                </div>
                <p className="mt-5 text-lg font-bold text-[#1A1006]">Message sent!</p>
                <p className="mt-2 max-w-xs text-sm text-[#3A2A18]/65">
                  Thanks for reaching out — our team will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-xl bg-[#FF6B35] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} optional />
                  <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} error={errors.subject} />
                </div>
                <Field label="Message" name="message" value={form.message} onChange={handleChange} error={errors.message} textarea />

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl bg-[#FDECEA] px-4 py-3 text-sm text-[#8A2E22]">
                    <AlertCircle size={15} />
                    Something went wrong sending your message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(255,107,53,0.3)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={15} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
