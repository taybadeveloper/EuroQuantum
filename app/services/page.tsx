import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore EuroQuantum's trading services — forex trading, CFD trading, crypto trading, managed portfolios, market analysis and risk management solutions.",
};

const process = [
  {
    number: "01",
    title: "Open an Account",
    description: "Complete our two-minute digital application with secure ID verification.",
  },
  {
    number: "02",
    title: "Fund Your Account",
    description: "Deposit AUD instantly via bank transfer, card or supported cryptocurrencies.",
  },
  {
    number: "03",
    title: "Trade the Markets",
    description: "Access forex, CFDs and crypto with institutional-grade execution.",
  },
  {
    number: "04",
    title: "Withdraw Anytime",
    description: "Fast, fee-free withdrawals processed within one business day.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-slate-300 pb-16 pt-40">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-500/[0.12] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-600/[0.13] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              Our Services
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              One Platform. <span className="text-gradient">Every Market.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Whatever your trading style or investment goals, EuroQuantum has
              a solution built for you — backed by deep liquidity, fast
              execution and professional support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Services grid ---------- */}
      <section className="mt-14 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="border-t border-slate-200 bg-sky-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From Sign-Up to Your First Trade in Minutes"
              subtitle="A simple, transparent onboarding process designed to get you trading without delay."
            />
          </Reveal>
          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-cyan-500/40 via-violet-500/40 to-cyan-500/40 lg:block" />
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 110}>
                <div className="relative text-center">
                  <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 font-display text-lg font-bold text-white shadow-md">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
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
