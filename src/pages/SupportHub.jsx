import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  LifeBuoy,
  Compass,
  UserCircle,
  ShieldAlert,
  MessageSquareHeart,
  Bot,
  RotateCcw,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { sendMessage, SUPPORT_CATEGORIES } from "../services/chatService";

const CATEGORY_ICONS = {
  membership: LifeBuoy,
  recommendations: Compass,
  account: UserCircle,
  fraud: ShieldAlert,
  feedback: MessageSquareHeart,
};

function TypingBubble() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-[#F3ECE3] px-4 py-3.5 w-fit">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[#3A2A18]/40"
          style={{
            animation: "sh-bounce 1.1s ease-in-out infinite",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes sh-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function MessageBubble({ role, text }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[82%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[14.5px] leading-relaxed sm:max-w-[75%] ${
          isUser
            ? "rounded-br-md bg-[#FF6B35] text-white"
            : "rounded-bl-md bg-[#F3ECE3] text-[#1A1006]"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default function SupportHub() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFailed, setLastFailed] = useState(null);
  const listRef = useRef(null);
  const idRef = useRef(0);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading, error]);

  function nextId() {
    idRef.current += 1;
    return idRef.current;
  }

  async function submit(text) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setInput("");
    setError(null);
    setMessages((m) => [...m, { id: nextId(), role: "user", text: trimmed }]);
    setLoading(true);

    try {
      const history = messages.map(({ role, text: t }) => ({ role, text: t }));
      const res = await sendMessage(trimmed, history);
      setMessages((m) => [...m, { id: nextId(), role: "assistant", text: res.text }]);
      setLastFailed(null);
    } catch {
      setError("Something went wrong sending that message. Please try again.");
      setLastFailed(trimmed);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    submit(input);
  }

  function handleRetry() {
    if (lastFailed) submit(lastFailed);
  }

  const isEmpty = messages.length === 0;

  return (
    <div className="w-full bg-[#FCFAF8]">
      <PageHeader />

      <section className="px-6 pt-8 pb-4 sm:pt-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B35]">
            Support Hub
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1006]">
            How can we help?
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-[#3A2A18]/70">
            Ask our assistant, or reach our team any time at{" "}
            <a
              href="mailto:support.striketechnologies@gmail.com"
              className="font-semibold text-[#FF6B35] hover:underline"
            >
              support.striketechnologies@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex w-full max-w-2xl flex-col overflow-hidden rounded-[1.75rem] border border-[#EFE6DC] bg-white shadow-[0_20px_50px_rgba(26,16,6,0.06)]"
        >
          {/* Header strip */}
          <div className="flex items-center gap-2.5 border-b border-[#EFE6DC] bg-[#FFF8F3] px-5 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35]">
              <Bot size={16} className="text-white" strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1A1006]">STRIKE Assistant</p>
              <p className="text-[11px] text-[#3A2A18]/50">Usually replies in a few seconds</p>
            </div>
          </div>

          {/* Message list / empty state */}
          <div
            ref={listRef}
            className="flex h-[420px] flex-col gap-4 overflow-y-auto px-5 py-6 sm:h-[460px]"
          >
            {isEmpty ? (
              <div className="flex h-full flex-col">
                <div className="mb-6">
                  <p className="text-lg font-bold text-[#1A1006]">Hello! 👋</p>
                  <p className="text-[15px] text-[#3A2A18]/70">How can I help you today?</p>
                </div>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {SUPPORT_CATEGORIES.map((cat) => {
                    const Icon = CATEGORY_ICONS[cat.id];
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => submit(cat.prompt)}
                        className="flex flex-col items-start gap-1.5 rounded-2xl border border-[#EFE6DC] bg-[#FCFAF8] px-4 py-3.5 text-left transition-colors hover:border-[#FF6B35]/40 hover:bg-[#FFF3E9]"
                      >
                        <span className="flex items-center gap-2 text-sm font-semibold text-[#1A1006]">
                          <Icon size={15} className="text-[#FF6B35]" />
                          {cat.label}
                        </span>
                        <span className="text-xs leading-snug text-[#3A2A18]/60">
                          {cat.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <>
                {messages.map((m) => (
                  <MessageBubble key={m.id} role={m.role} text={m.text} />
                ))}
                {loading && <TypingBubble />}
                {error && (
                  <div className="flex flex-col items-start gap-2 rounded-2xl rounded-bl-md bg-[#FDECEA] px-4 py-3 text-[13.5px] text-[#8A2E22]">
                    <span>{error}</span>
                    <button
                      type="button"
                      onClick={handleRetry}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#AC2D00] hover:underline"
                    >
                      <RotateCcw size={12} />
                      Try again
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input row */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2.5 border-t border-[#EFE6DC] bg-white px-4 py-3.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
              className="flex-1 rounded-full border border-[#EFE6DC] bg-[#FCFAF8] px-4 py-2.5 text-sm text-[#1A1006] outline-none transition-colors focus:border-[#FF6B35]/50 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-white transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            >
              <Send size={16} strokeWidth={2.2} />
            </button>
          </form>
        </motion.div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-[#3A2A18]/45">
          This assistant gives general guidance and can't yet take real actions on your
          account. For anything urgent, email support.striketechnologies@gmail.com.
        </p>
      </section>

      <Footer />
    </div>
  );
}
