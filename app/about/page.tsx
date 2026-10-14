import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  IconArrowRight,
  IconAward,
  IconEye,
  IconTarget,
  IconUsers,
  IconZap,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EuroQuantum — Australia's advanced trading and investment platform. Our story, mission, values and 12+ years of market expertise.",
};

const values = [
  {
    icon: <IconAward className="h-6 w-6" />,
    title: "Integrity",
    description:
      "We put our clients' interests first in every decision — with transparent pricing and honest advice.",
  },
  {
    icon: <IconZap className="h-6 w-6" />,
    title: "Innovation",
    description:
      "We relentlessly invest in technology to keep our platform at the cutting edge of trading.",
  },
  {
    icon: <IconEye className="h-6 w-6" />,
    title: "Transparency",
    description:
      "No hidden fees, no fine print surprises. What you see is exactly what you get.",
  },
  {
    icon: <IconUsers className="h-6 w-6" />,
    title: "Client First",
    description:
      "From onboarding to execution, every EuroQuantum experience is designed around you.",
  },
];

const milestones = [
  {
    year: "2013",
    title: "Founded in Sydney",
    description:
      "EuroQuantum is founded with a mission to bring institutional-grade trading technology to Australian investors.",
  },
  {
    year: "2016",
    title: "Proprietary Platform Launch",
    description:
      "We launch our in-house trading platform with sub-100ms execution and deep liquidity aggregation.",
  },
  {
    year: "2019",
    title: "50,000 Registered Traders",
    description:
      "EuroQuantum crosses 50,000 active traders and expands our research and education team.",
  },
  {
    year: "2022",
    title: "Crypto & Managed Portfolios",
    description:
      "We add 24/7 crypto trading and professionally managed portfolio solutions to our offering.",
  },
  {
    year: "2025",
    title: "$4B+ Monthly Volume",
    description:
      "EuroQuantum becomes one of Australia's fastest-growing trading platforms by monthly volume.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-slate-300 pb-16 pt-40">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              Built for Traders. <span className="text-gradient">Driven by Innovation.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Since 2013, EuroQuantum has empowered Australian traders and
              investors with world-class technology, transparent pricing and
              genuine human support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Story ---------- */}
      <section className="mt-14 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
                <p>
                  EuroQuantum was founded in Sydney in 2013 by a team of market
                  veterans who saw a gap in the Australian market: retail
                  traders were being underserved with slow platforms, wide
                  spreads and opaque pricing.
                </p>
                <p>
                  We set out to change that — building a trading platform that
                  combines the speed and liquidity traditionally reserved for
                  institutions with the simplicity and support retail investors
                  deserve.
                </p>
                <p>
                  Today, more than 85,000 traders and investors across
                  Australia trust EuroQuantum with their forex, CFD, crypto and
                  portfolio investments — and we&apos;re just getting started.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-slate-200 bg-white p-7 text-center lg:text-left">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/15 text-green-600 ring-1 ring-slate-900/10">
                  <IconTarget className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  To empower traders and investors with advanced technology,
                  transparent pricing and world-class support — so everyone can
                  trade at their best.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-2xl border border-slate-200 bg-white p-7 text-center lg:text-left">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/15 text-green-600 ring-1 ring-slate-900/10">
                  <IconEye className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  To be Australia&apos;s most trusted trading and investment
                  platform — where innovation meets integrity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our Values"
              title="The Principles That Guide Everything We Do"
              subtitle="Four values sit at the heart of EuroQuantum — shaping our technology, our service and our relationships with clients."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:bg-stone-50">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-600 ring-1 ring-slate-900/10">
                    {value.icon}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Milestones ---------- */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="Twelve Years of Momentum"
            />
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute bottom-4 left-[19px] top-4 w-px bg-green-500/50" />
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <Reveal key={milestone.year} delay={i * 80}>
                  <div className="relative flex gap-6 pl-0">
                    <span className="relative z-10 mt-1 h-10 w-10 shrink-0 rounded-full border border-green-500/40 bg-white shadow-sm">
                      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500" />
                    </span>
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-green-500/40 md:ml-4">
                      <span className="font-display text-sm font-bold tracking-widest text-gradient">
                        {milestone.year}
                      </span>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-slate-900">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
