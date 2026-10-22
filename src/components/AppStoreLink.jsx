import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Apple,
  PlayCircle,
  Home,
  User,
  Menu,
  Bell,
  QrCode,
  Utensils,
  CreditCard,
  Receipt,
  Clock,
  RefreshCw,
  ChefHat,
  SignalHigh,
  Wifi,
  BatteryFull,
} from "lucide-react";
import { GOOGLE_PLAY_URL } from "../config/links";
import StrikeLogo from "./StrikeLogo";

const quickActions = [
  { icon: CreditCard, label: "My Card" },
  { icon: Receipt, label: "Transactions" },
  { icon: Clock, label: "History" },
  { icon: RefreshCw, label: "Renew" },
];

function NavItem({ icon: Icon, label, active }) {
  return (
    <div className="flex flex-col items-center gap-[6%]">
      <Icon
        className={`h-3 w-3 ${active ? "text-[#FF6B35]" : "text-[#1A1006]/35"}`}
        strokeWidth={2.2}
      />
      <p className={`text-[4.5px] font-semibold ${active ? "text-[#FF6B35]" : "text-[#1A1006]/35"}`}>
        {label}
      </p>
    </div>
  );
}

function AppScreenPreview() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#FAF7F3]">
      {/* Status bar */}
      <div className="flex shrink-0 items-center justify-between px-[9%] pt-[8%] text-[6px] font-semibold text-[#1A1006]">
        <span>9:41</span>
        <div className="flex items-center gap-[6%]">
          <SignalHigh className="h-2 w-2" strokeWidth={2.5} />
          <Wifi className="h-2 w-2" strokeWidth={2.5} />
          <BatteryFull className="h-2.5 w-2.5" strokeWidth={2} />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-[7%] pt-[6%] pb-[4%]">
        {/* Top nav row */}
        <div className="mb-[6%] flex shrink-0 items-center justify-between">
          <Menu className="h-3 w-3 text-[#1A1006]" strokeWidth={2.2} />
          <div className="flex items-center gap-[4%]">
            <StrikeLogo className="h-3" />
            <span className="text-[9px] font-extrabold tracking-tight text-[#FF6B35]">
              STRIKE
            </span>
          </div>
          <div className="relative">
            <Bell className="h-3 w-3 text-[#1A1006]" strokeWidth={2.2} />
            <span className="absolute -top-[8%] -right-[8%] h-1 w-1 rounded-full bg-[#FF6B35]" />
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-[6%] shrink-0">
          <p className="text-[8px] font-bold text-[#1A1006]">Hi Ramesh 👋</p>
          <p className="text-[6.5px] text-[#1A1006]/50">Welcome back!</p>
        </div>

        {/* Monthly card */}
        <div
          className="mb-[6%] shrink-0 rounded-xl p-[7%] shadow-[0_8px_16px_rgba(255,90,44,0.28)]"
          style={{ background: "linear-gradient(135deg, #FF6B35 0%, #E8501B 100%)" }}
        >
          <div className="mb-[6%] flex items-center justify-between">
            <span className="text-[5.5px] font-semibold text-white/80">Monthly Card</span>
            <span className="rounded-full bg-white/25 px-[8%] py-[2%] text-[5px] font-bold text-white">
              Active
            </span>
          </div>
          <p className="text-[9px] font-bold leading-tight text-white">Student Meal Plan</p>
          <div className="mt-[8%] flex items-end justify-between">
            <div>
              <p className="text-[5px] text-white/70">Valid Till</p>
              <p className="text-[6px] font-semibold text-white">31 May 2025</p>
              <p className="mt-[6%] text-[5px] text-white/70">Days Left</p>
              <p className="text-[8px] font-bold text-white">18</p>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
              <QrCode className="h-6 w-6 text-[#1A1006]" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Balance row */}
        <div className="mb-[6%] flex shrink-0 items-center justify-between rounded-xl bg-white px-[6%] py-[4.5%] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
          <div>
            <p className="text-[5.5px] text-[#1A1006]/50">Current Balance</p>
            <p className="text-[7.5px] font-bold text-[#1A1006]">12 Meals Left</p>
          </div>
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF1E9]">
            <Utensils className="h-3 w-3 text-[#FF6B35]" strokeWidth={2.2} />
          </div>
        </div>

        {/* Quick actions */}
        <div className="mb-[6%] shrink-0">
          <p className="mb-[6%] text-[6px] font-bold text-[#1A1006]">Quick Actions</p>
          <div className="grid grid-cols-4 gap-[2%]">
            {quickActions.map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-[8%]">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
                  <a.icon className="h-3 w-3 text-[#FF6B35]" strokeWidth={2} />
                </div>
                <p className="text-center text-[4.5px] font-medium leading-tight text-[#1A1006]/70">
                  {a.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Promo banner */}
        <div className="flex shrink-0 items-center justify-between gap-[4%] rounded-xl bg-white px-[5%] py-[4%] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
          <p className="text-[5.5px] font-semibold leading-tight text-[#1A1006]">
            Love the food?
            <br />
            <span className="font-normal text-[#1A1006]/50">
              Renew your card in one tap.
            </span>
          </p>
          <div
            className="flex h-8 w-10 shrink-0 items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg, #FFB68C 0%, #FF6B35 100%)" }}
          >
            <ChefHat className="h-4 w-4 text-white" strokeWidth={1.8} />
          </div>
        </div>

        {/* Bottom nav — Scan raised in the center */}
        <div className="relative mt-auto flex shrink-0 items-center justify-between border-t border-black/5 pt-[7%]">
          <NavItem icon={Home} label="Home" active />
          <NavItem icon={CreditCard} label="My Card" />
          <div className="relative -mt-[26%] flex flex-col items-center gap-[6%]">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6B35] shadow-[0_4px_10px_rgba(255,107,53,0.5)] ring-4 ring-[#FAF7F3]">
              <QrCode className="h-3.5 w-3.5 text-white" strokeWidth={2} />
            </div>
            <p className="text-[4.5px] font-semibold text-[#FF6B35]">Scan</p>
          </div>
          <NavItem icon={Clock} label="History" />
          <NavItem icon={User} label="Profile" />
        </div>
      </div>
    </div>
  );
}

export default function AppStoreLink() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="w-full bg-white py-16 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.45, 0, 0.2, 1] }}
        className="relative mx-auto flex w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] sm:flex-row"
        style={{
          background:
            "radial-gradient(120% 140% at 75% 20%, #4a1c0d 0%, #241109 45%, #0d0906 100%)",
        }}
      >
        {/* star particles — span the whole card so both sides share one background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.7) 100%, transparent), radial-gradient(1.5px 1.5px at 70% 20%, rgba(255,255,255,0.5) 100%, transparent), radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.6) 100%, transparent), radial-gradient(1.5px 1.5px at 85% 65%, rgba(255,255,255,0.4) 100%, transparent), radial-gradient(1px 1px at 60% 45%, rgba(255,255,255,0.5) 100%, transparent), radial-gradient(1.5px 1.5px at 12% 80%, rgba(255,255,255,0.4) 100%, transparent)",
            backgroundRepeat: "repeat",
            backgroundSize: "220px 220px",
          }}
        />

        {/* ambient orange glow behind the phone */}
        <div
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            width: "60%",
            aspectRatio: "1 / 1",
            right: "-10%",
            top: "50%",
            transform: "translateY(-50%)",
            background:
              "radial-gradient(closest-side, rgba(255,107,53,0.55), rgba(255,107,53,0.15) 60%, transparent 78%)",
            filter: "blur(30px)",
          }}
        />

        {/* Left: copy + store buttons */}
        <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 px-8 py-14 sm:px-12 sm:py-16 sm:flex-[1.15]">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            The Whole City,
            <br />
            In Your Pocket.
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-white/60">
            Download the STRIKE app to discover, subscribe, and manage your
            memberships anywhere. Available on Android &amp; iOS.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#171310] transition-transform hover:scale-[1.03]"
            >
              <Apple size={18} strokeWidth={2} />
              App Store
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#171310] transition-transform hover:scale-[1.03]"
            >
              <PlayCircle size={18} strokeWidth={2} />
              Google Play
            </a>
          </div>
        </div>

        {/* Right: phone mockup */}
        <div
          className="relative z-10 flex flex-1 items-center justify-center py-14 sm:py-16 sm:flex-[0.85]"
          style={{ perspective: "1600px" }}
        >
          <div
            className="relative"
            style={{
              width: "clamp(200px, 30%, 290px)",
              aspectRatio: "9 / 18",
              transform: "rotateY(-22deg) rotateX(6deg) rotateZ(5deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative h-full w-full bg-[#1a1a1a] p-[3%] shadow-[0_50px_90px_rgba(0,0,0,0.6)]">
              <div className="absolute left-1/2 top-[4%] z-20 h-[2.5%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
              <div className="h-full w-full overflow-hidden bg-[#FAF7F3]">
                <AppScreenPreview />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
