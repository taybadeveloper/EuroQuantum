import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconWallet,
  IconShield,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How EuroQuantum works in three simple steps — sign up free, fund your account from AU$250, and trade with AI market support. The final call is always yours.",
};

const steps = [
  {
    number: "01",
    title: "Sign Up Free",
    description:
      "Fill in the short form with your name, email and phone number. It takes less than two minutes.",
    points: [
      "No app to download — works in your browser",
      "Free account, no obligation",
      "An account manager can help you set up",
    ],
  },
  {
    number: "02",
    title: "Fund Your Account",
    description:
      "Add from AU$250 using a payment method that suits you. Your account manager can walk you through it.",
    points: [
      "Start small — AU$250 is enough",
      "Account shown in Australian dollars",
      "Clear terms, no hidden fees",
    ],
  },
  {
    number: "03",
    title: "Trade with AI Support",
    description:
      "The AI watches the markets and flags opportunities. You review them, set your limits, and decide when to trade.",
    points: [
      "Simple signals with the reason behind each one",
      "Set stop-loss and take-profit levels",
      "You stay in control of every trade",
    ],
  },
];

const goodToKnow = [
  {
    icon: <IconClock className="h-5 w-5" />,
    title: "Aussie time zones",
    description: "Alerts and support fit your day, from Perth to Brisbane.",
  },
  {
    icon: <IconWallet className="h-5 w-5" />,
    title: "AUD-friendly",
    description: "See your account in Australian dollars and fund it with ease.",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    title: "Safe & clear",
    description: "Bank-level encryption and easy-to-find terms on every page.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-slate-300 pb-16 pt-40">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              From Sign-Up to First Trade in <span className="text-gradient">3 Simple Steps</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              EuroQuantum does the heavy market research. You review the ideas
              and make the final call — exactly how it should be.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Steps ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Getting Started"
              title="Each Step, Explained"
            />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-green-500/50 hover:bg-stone-50">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-green-600 font-display text-lg font-bold text-white shadow-md">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-500/25 ring-1 ring-green-500/40">
                          <IconCheck className="h-3 w-3 text-green-600" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Good to know ---------- */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Good to Know"
              title="Built for Life in Australia"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {goodToKnow.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 text-center transition-all duration-300 hover:border-green-500/50 hover:bg-stone-50">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/15 text-green-600 ring-1 ring-slate-900/10">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-green-500/40 p-px">
              <div className="relative overflow-hidden rounded-3xl bg-white px-8 py-16 text-center md:px-16">
                <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-slate-500/[0.05] blur-[100px]" />
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-slate-500/[0.05] blur-[100px]" />
                <div className="relative">
                  <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    Ready for <span className="text-gradient">Step 1?</span>
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-600">
                    Sign up free in under two minutes and see the AI market
                    insights for yourself.
                  </p>
                  <div className="mt-9">
                    <Link
                      href="/get-started"
                      className="inline-flex items-center gap-2 rounded-full bg-green-600 px-9 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      Sign Up Free
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
