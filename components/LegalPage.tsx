import type { ReactNode } from "react";
import Reveal from "./Reveal";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-slate-300 pb-14 pt-40">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-green-500/[0.12] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-green-500/[0.13] blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {subtitle}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              Last Updated: {lastUpdated}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Content ---------- */}
      <section className="mt-14 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="space-y-10">{children}</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-slate-900">{heading}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
        {children}
      </div>
    </section>
  );
}
