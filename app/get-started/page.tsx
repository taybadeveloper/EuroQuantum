import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SignupForm from "@/components/SignupForm";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Create your free Striluxon AI account in under two minutes. Start trading from AU$250 with AI market insights.",
};

const steps = [
  {
    number: "01",
    title: "Sign Up Free",
    description:
      "Fill in the short form with your name, email and phone number. It takes less than two minutes.",
  },
  {
    number: "02",
    title: "Fund Your Account",
    description:
      "Add from AU$250 using a payment method that suits you. Your account manager can walk you through it.",
  },
  {
    number: "03",
    title: "Trade with AI Support",
    description:
      "The AI watches the markets and flags opportunities. You review them, set your limits, and decide when to trade.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pb-16 pt-40">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-500/[0.12] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-600/[0.13] blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                Get Started
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="hero-heading mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
                Your Free Account Is{" "}
                <span className="text-gradient">Two Minutes Away</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="hero-paragraph mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Join Striluxon AI and let the AI do the heavy market research
                for you. Sign up free, fund from AU$250, and trade crypto,
                forex, stocks and commodities with confidence.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-9 space-y-3">
                {[
                  "Free sign-up — no deposit needed to start",
                  "Bank-level encryption keeps your details safe",
                  "Works in any browser — no app to download",
                ].map((item) => (
                  <li key={item} className="flex items-center justify-center gap-3 text-sm text-slate-700 xl:justify-start">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-500/25 ring-1 ring-cyan-500/40">
                      <IconCheck className="h-3 w-3 text-cyan-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <SignupForm />
          </Reveal>
        </div>
      </section>

      {/* ---------- Steps ---------- */}
      <section className="border-t border-slate-200 bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="Three Simple Steps After Sign-Up"
            />
          </Reveal>
          <div className="relative mt-12 grid gap-10 md:grid-cols-3">
            <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-cyan-500/40 md:block" />
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120}>
                <div className="relative text-center">
                  <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cyan-600 font-display text-lg font-bold text-white shadow-md">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
