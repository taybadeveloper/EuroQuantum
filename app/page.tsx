import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SignupForm from "@/components/SignupForm";
import FaqAccordion from "@/components/FaqAccordion";
import {
  IconActivity,
  IconArrowRight,
  IconBell,
  IconBitcoin,
  IconBook,
  IconChart,
  IconCheck,
  IconClock,
  IconGlobe,
  IconHeadset,
  IconLayers,
  IconMapPin,
  IconShield,
  IconSparkles,
  IconWallet,
  IconZap,
} from "@/components/icons";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: {
    absolute: "EuroQuantum | AI Trading Platform in Australia from AU$250",
  },
  description:
    "EuroQuantum is a browser-based AI trading platform for Australians. Trade crypto, forex, stocks and commodities with AI market insights. Start from AU$250.",
};

const trustItems = [
  {
    icon: <IconWallet className="h-5 w-5" />,
    title: "Start from AU$250",
    description: "A small, sensible first step",
  },
  {
    icon: <IconGlobe className="h-5 w-5" />,
    title: "No app needed",
    description: "Works in any web browser",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    title: "Bank-level encryption",
    description: "Your details stay protected",
  },
  {
    icon: <IconHeadset className="h-5 w-5" />,
    title: "Support on Aussie hours",
    description: "Real help when you need it",
  },
];

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

const markets = [
  {
    icon: <IconBitcoin className="h-6 w-6" />,
    title: "Crypto",
    description:
      "Trade Bitcoin, Ethereum and other popular coins. The AI tracks fast price swings that are hard to follow by hand.",
  },
  {
    icon: <IconActivity className="h-6 w-6" />,
    title: "Forex",
    description:
      "Follow major pairs like AUD/USD and EUR/USD. Signals are timed with the Sydney, London and New York sessions in mind.",
  },
  {
    icon: <IconChart className="h-6 w-6" />,
    title: "Stocks",
    description:
      "Keep an eye on big names from Australia and overseas. The AI flags trend changes and unusual volume.",
  },
  {
    icon: <IconLayers className="h-6 w-6" />,
    title: "Commodities",
    description:
      "Gold, oil and other raw materials often move with world news. The AI helps you spot those shifts early.",
  },
];

const features = [
  {
    icon: <IconSparkles className="h-5 w-5" />,
    title: "AI Market Scanning",
    description: "Checks thousands of price movements every minute, day and night.",
  },
  {
    icon: <IconZap className="h-5 w-5" />,
    title: "Clear Trade Signals",
    description: "Simple buy or sell ideas with the reason behind each one.",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    title: "Risk Controls",
    description: "Set stop-loss and take-profit levels before you trade.",
  },
  {
    icon: <IconBell className="h-5 w-5" />,
    title: "Real-Time Alerts",
    description: "Get notified when a market you follow starts to move.",
  },
  {
    icon: <IconChart className="h-5 w-5" />,
    title: "Easy Dashboard",
    description: "See your balance, open trades and results on one screen.",
  },
  {
    icon: <IconGlobe className="h-5 w-5" />,
    title: "Works on Any Device",
    description: "Use it on your laptop, tablet or phone browser.",
  },
];

const aussieAdvantages = [
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
    icon: <IconMapPin className="h-5 w-5" />,
    title: "Local focus",
    description: "Market coverage includes the ASX and AUD currency pairs.",
  },
  {
    icon: <IconBook className="h-5 w-5" />,
    title: "Plain English",
    description: "No heavy jargon. Every signal is easy to understand.",
  },
];

const comparisonRows = [
  { label: "Market watching", manual: "A few hours a day", ai: "24/7" },
  { label: "Markets covered", manual: "Usually one or two", ai: "Crypto, forex, stocks, commodities" },
  { label: "Decision basis", manual: "Gut feel and news", ai: "Price data and patterns" },
  { label: "Emotional bias", manual: "High", ai: "Reduced" },
  { label: "Time needed", manual: "Hours of research", ai: "Minutes to review signals" },
  { label: "Final decision", manual: "You", ai: "Still you" },
];

const safetyPoints = [
  {
    title: "Encrypted data",
    description: "All personal details are protected with SSL encryption.",
  },
  {
    title: "Secure accounts",
    description: "Login protection keeps your account private.",
  },
  {
    title: "Clear terms",
    description:
      "No hidden fees. Our terms, privacy policy and risk disclosure are easy to find.",
    links: true,
  },
  {
    title: "You stay in control",
    description:
      "The AI suggests. You decide. Nothing is traded without your settings.",
  },
];

const faqs = [
  {
    q: "Is EuroQuantum available in Australia?",
    a: "Yes. EuroQuantum is built for Australian users and works in every state and territory.",
  },
  {
    q: "What is the minimum deposit?",
    a: "You can start trading from AU$250.",
  },
  {
    q: "Is there a EuroQuantum app?",
    a: "No download is needed. EuroQuantum runs in your web browser on any phone, tablet or computer.",
  },
  {
    q: "Do I need trading experience?",
    a: "No. Signals come with simple explanations, and an account manager can help you get started.",
  },
  {
    q: "Is EuroQuantum legit?",
    a: "EuroQuantum is a real platform with secure sign-up, clear terms and a full risk disclosure. As with any trading, your capital is at risk.",
  },
  {
    q: "How does the AI choose trades?",
    a: "It studies price history, trends and market volume to spot patterns. It then shows you trade ideas you can accept or ignore.",
  },
  {
    q: "Can I withdraw my money?",
    a: "Yes. You can request a withdrawal from your dashboard at any time.",
  },
  {
    q: "How long does sign-up take?",
    a: "Less than two minutes. Just fill in the form at the top of this page.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pb-20 pt-30">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-slate-500/[0.05] blur-[130px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-slate-500/[0.05] blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="text-center md:text-left">
            <Reveal delay={100}>
              <h1 className="hero-heading mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
                The AI Trading Platform <span className="text-gradient">Australia</span> Can Count On
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="hero-paragraph mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:mx-0">
                A straightforward AI trading platform for Australians. It
                studies the markets, highlights opportunities, and leaves the
                final call to you.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8">
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-9 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  Get Started
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <div id="signup" className="relative mx-auto w-full max-w-md scroll-mt-32">
              <SignupForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Marquee points ---------- */}
      <section className="border-y border-slate-200 bg-white py-4">
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[
              "AI watches the markets 24/7 — you stay in control",
              "No app to download — runs in your browser",
              "Start from AU$250",
            ].concat([
              "AI watches the markets 24/7 — you stay in control",
              "No app to download — runs in your browser",
              "Start from AU$250",
            ]).map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 whitespace-nowrap px-8 text-sm text-slate-700"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-500/25 ring-1 ring-green-500/40">
                  <IconCheck className="h-3 w-3 text-green-600" />
                </span>
                {item}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      {/* ---------- Trust strip ---------- */}
      <section className="border-y border-slate-200 bg-stone-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {trustItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex items-center justify-center gap-4 px-2 py-8 text-center lg:justify-start lg:px-8 lg:text-left">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-500/15 text-green-600 ring-1 ring-slate-900/10">
                  {item.icon}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- What Is EuroQuantum ---------- */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-stone-50 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="The Platform"
              title="What Is EuroQuantum?"
            />
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-slate-600">
              EuroQuantum is an online trading platform built for people in
              Australia. It uses artificial intelligence to scan crypto, forex,
              stock and commodity markets, then shows you trade ideas based on
              real price data. You choose what to act on. There is no app to
              download, and you can open an account from AU$250.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
              {[
                { value: "AU$250", label: "Minimum deposit" },
                { value: "4", label: "Markets to trade" },
                { value: "24/7", label: "AI market scanning" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center"
                >
                  <p className="text-gradient font-display text-3xl font-bold">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- How It Works ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Getting Started"
              title="Get Started in 3 Simple Steps"
            />
          </Reveal>
          <div className="relative mt-14 grid gap-10 md:grid-cols-3">
            <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-green-500/40 md:block" />
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120}>
                <div className="relative text-center">
                  <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-green-600 font-display text-lg font-bold text-white shadow-md">
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
          <Reveal delay={200}>
            <div className="mt-14 text-center">
              <Link
                href="#signup"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-9 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                Register Now
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Markets ---------- */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Markets"
              title="One Platform, Four Markets"
              subtitle="Whatever you want to follow, EuroQuantum keeps an eye on it for you."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {markets.map((market, i) => (
              <Reveal key={market.title} delay={i * 80} className="h-full">
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-green-500/50 hover:bg-stone-50">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-600 ring-1 ring-slate-900/10 transition-colors duration-300">
                    {market.icon}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                    {market.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {market.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Key Features ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Key Features"
              title="Tools That Make Trading Easier"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80} className="h-full">
                <div className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-green-500/50 hover:bg-stone-50">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-600 ring-1 ring-slate-900/10">
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why Australians Choose EuroQuantum ---------- */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Built Around How <span className="text-gradient">Australians Trade</span>
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                Most trading tools are made for US or European hours. EuroQuantum
                is set up for life in Australia.
              </p>
              <p className="mt-5 leading-relaxed text-slate-600">
                That is why more people are looking for an AI trading platform
                Australia can relate to, not one built for somewhere else.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {aussieAdvantages.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:border-green-500/50 hover:bg-stone-50 sm:text-left">
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

      {/* ---------- AI vs Manual Trading ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="The Difference"
              title="AI-Assisted Trading vs Manual Trading"
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="grid grid-cols-2 border-b border-slate-200 bg-white lg:grid-cols-[1.1fr_1fr_1.2fr]">
                <div className="hidden px-5 py-5 lg:block" />
                <div className="px-5 py-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Manual Trading
                  </p>
                </div>
                <div className="bg-stone-50 px-5 py-5 text-center">
                  <p className="text-gradient flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em]">
                    <IconSparkles className="h-3.5 w-3.5" />
                    EuroQuantum
                  </p>
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.2fr] ${
                    i < comparisonRows.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <div className="col-span-2 px-5 pt-4 text-sm font-medium text-slate-500 lg:col-span-1 lg:py-4 lg:font-normal">
                    {row.label}
                  </div>
                  <div className="px-5 py-3 text-center text-sm text-slate-600 lg:py-4">
                    {row.manual}
                  </div>
                  <div className="bg-stone-50 px-5 py-3 text-center text-sm font-medium text-slate-900 lg:py-4">
                    {row.ai}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Safe & Legit ---------- */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <Reveal>
            <div className="text-center md:text-left">
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Is EuroQuantum <span className="text-gradient">Safe to Use?</span>
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                We know trust matters before you sign up. Here is how we
                protect you:
              </p>
              <ul className="mt-8 space-y-5">
                {safetyPoints.map((point) => (
                  <li key={point.title} className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green-500/25 ring-1 ring-green-500/40">
                      <IconCheck className="h-3.5 w-3.5 text-green-600" />
                    </span>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-900">{point.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {point.description}
                        {point.links && (
                          <>
                            {" "}— read our{" "}
                            <Link href="/terms-and-conditions" className="text-green-600 transition-colors hover:text-green-700">
                              terms
                            </Link>
                            ,{" "}
                            <Link href="/privacy-policy" className="text-green-600 transition-colors hover:text-green-700">
                              privacy policy
                            </Link>{" "}
                            and{" "}
                            <Link href="/disclaimer" className="text-green-600 transition-colors hover:text-green-700">
                              risk disclosure
                            </Link>
                            .
                          </>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-white to-stone-50 p-10 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-green-500/[0.08] blur-[60px]" />
              <svg
                viewBox="0 0 200 220"
                className="relative mx-auto h-auto w-56"
                role="img"
                aria-label="EuroQuantum security shield"
              >
                <defs>
                  <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#22c55e" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#22c55e" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                <path
                  d="M100 12 L178 42 V108 C178 162 143 194 100 210 C57 194 22 162 22 108 V42 Z"
                  fill="url(#shieldFill)"
                  stroke="#16a34a"
                  strokeWidth="5"
                />
                <path
                  d="M62 110 L90 138 L142 82"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="relative mt-6 text-center text-sm font-semibold text-slate-700">
                Bank-level encryption and identity protection on every trade
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <Reveal>
            <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12">
              <FaqAccordion items={faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-green-500/40 p-px">
              <div className="relative overflow-hidden rounded-3xl bg-white px-8 py-16 text-center md:px-16">
                <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-slate-500/[0.05] blur-[100px]" />
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-slate-500/[0.05] blur-[100px]" />
                <div className="relative">
                  <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                    Ready to Try a Smarter{" "}
                    <span className="text-gradient">AI Trading Platform</span> in Australia?
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-600">
                    Join EuroQuantum today. Sign up for free, start from
                    AU$250, and let AI do the heavy market research for you.
                  </p>
                  <div className="mt-9">
                    <Link
                      href="/get-started"
                      className="inline-flex items-center gap-2 rounded-full bg-green-600 px-9 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      Get Started With Free Account
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-slate-500">
                    Trading crypto, forex, stocks and commodities involves
                    significant risk and may not suit every investor. You may
                    lose some or all of your capital. Past performance does not
                    guarantee future results. Only trade with money you can
                    afford to lose.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
