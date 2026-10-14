import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SignupForm from "@/components/SignupForm";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Create your free EuroQuantum account in under two minutes. Start trading from AU$250 with AI market insights.",
};

export default function GetStartedPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pb-16 pt-40">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6">
          <div className="text-center lg:text-left">
            
            <Reveal delay={100}>
              <h1 className="hero-heading mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
                Your Free Account Is{" "}
                <span className="text-gradient">Two Minutes Away</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="hero-paragraph mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
                Join EuroQuantum and let the AI do the heavy market research
                for you. Sign up free, fund from AU$250, and trade crypto,
                forex, stocks and commodities with confidence.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="hero-points mt-9 space-y-3">
                {[
                  "Free sign-up — no deposit needed to start",
                  "Bank-level encryption keeps your details safe",
                  "Works in any browser — no app to download",
                ].map((item) => (
                  <li key={item} className="flex items-center justify-start gap-3 text-left text-sm text-slate-700">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-500/25 ring-1 ring-green-500/40">
                      <IconCheck className="h-3 w-3 text-green-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={250} className="mx-auto w-full max-w-md">
            <SignupForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
