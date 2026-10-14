import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  IconActivity,
  IconArrowRight,
  IconBell,
  IconBitcoin,
  IconChart,
  IconGlobe,
  IconLayers,
  IconShield,
  IconSparkles,
  IconZap,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore EuroQuantum's trading features — AI market scanning, clear trade signals, risk controls, real-time alerts and an easy dashboard that works on any device.",
};

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

export default function FeaturesPage() {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-slate-300 pb-16 pt-40">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              Tools That Make <span className="text-gradient">Trading Easier</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              EuroQuantum combines AI market research with simple, human tools —
              so you spend minutes reviewing, not hours researching.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Features grid ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Key Features"
              title="Everything You Need, Nothing You Don't"
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
                    Try These <span className="text-gradient">Features</span> Yourself
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-600">
                    Create a free account and see the AI market insights on your
                    own dashboard.
                  </p>
                  <div className="mt-9">
                    <Link
                      href="/get-started"
                      className="inline-flex items-center gap-2 rounded-full bg-green-600 px-9 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      Get Started Free
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
