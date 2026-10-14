import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IconQuote } from "@/components/icons";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews" },
  title: "Reviews",
  description:
    "What Australians say about EuroQuantum — an AI trading platform that studies the markets, highlights opportunities and leaves the final call to you.",
};

const ratingSummary = [
  { value: "4.8", label: "Average rating" },
  { value: "50K+", label: "Registered traders" },
  { value: "24/7", label: "AI market scanning" },
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Perth, WA",
    text: "The platform is straightforward and the signals are easy to understand. I like that the final decision always stays with me.",
  },
  {
    name: "James R.",
    location: "Brisbane, QLD",
    text: "No app to download was a big plus for me. I use it in my browser on my phone and laptop, and it works the same on both.",
  },
  {
    name: "Priya K.",
    location: "Sydney, NSW",
    text: "Support answers on Aussie hours, which makes a real difference. The account manager walked me through my first deposit step by step.",
  },
  {
    name: "Daniel W.",
    location: "Melbourne, VIC",
    text: "I had never traded before. The signals come with plain-English explanations, so I understood what I was looking at.",
  },
  {
    name: "Emma T.",
    location: "Adelaide, SA",
    text: "The risk controls are the part I appreciate most — I set my limits before every trade and the platform respects them.",
  },
  {
    name: "Liam B.",
    location: "Gold Coast, QLD",
    text: "The AI watches the markets around the clock and I check the alerts when they suit me. It fits around my day job.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-slate-300 pb-16 pt-30">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              What Australians Say About <span className="text-gradient">EuroQuantum</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Real people, real markets, one simple idea — the AI does the
              research, you make the call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Rating summary ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-10">
        <div className="mx-auto grid max-w-4xl gap-4 px-6 sm:grid-cols-3">
          {ratingSummary.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center">
                <p className="text-gradient font-display text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Review cards ---------- */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="Straight Talk From Traders"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-green-500/50 hover:bg-stone-50">
                  <IconQuote className="h-7 w-7 text-green-600/40" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div>
                      <p className="font-display text-sm font-semibold text-slate-900">
                        {review.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {review.location}
                      </p>
                    </div>
                    <span className="text-sm font-semibold tracking-wider text-green-500">
                      ★★★★★
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
