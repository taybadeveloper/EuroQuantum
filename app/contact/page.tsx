import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SignupForm from "@/components/SignupForm";
import { IconClock, IconHeadset, IconMail, IconMapPin, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with EuroQuantum — Australia's advanced trading and investment platform. Contact our Sydney office by email, phone or our online enquiry form.",
};

const contactInfo = [
  {
    icon: <IconMail className="h-5 w-5" />,
    label: "Email Us",
    value: "support@euroquantum-au.com",
    sub: "info@euroquantum-au.com",
  },
  {
    icon: <IconPhone className="h-5 w-5" />,
    label: "Call Us",
    value: "+61 2 8000 0000",
    sub: "Mon–Fri, 9 AM – 6 PM AEST",
  },
  {
    icon: <IconMapPin className="h-5 w-5" />,
    label: "Visit Us",
    value: "Sydney, NSW 2000",
    sub: "Australia",
  },
  {
    icon: <IconClock className="h-5 w-5" />,
    label: "Support Hours",
    value: "24/7 Client Support",
    sub: "Trading desk open 24/5",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-slate-300 pb-16 pt-40">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-500/[0.12] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-600/[0.13] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Contact Us
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              Get in <span className="text-gradient">Touch</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Questions about trading, managed portfolios or opening an
              account? Our Australian-based team is here to help — 24/7.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact content ---------- */}
      <section className="mt-14 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-5 lg:col-span-2">
            {contactInfo.map((item, i) => (
              <Reveal key={item.label} delay={i * 90}>
                <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-sky-50">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-500/15 text-cyan-600 ring-1 ring-slate-900/10">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </h3>
                    <p className="mt-1.5 font-display text-base font-semibold text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500">{item.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={380}>
              <div className="flex items-start gap-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/[0.08] p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-500/25 text-cyan-600 ring-1 ring-cyan-500/40">
                  <IconHeadset className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">
                    Fast Response
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    We reply to every enquiry within 24 hours — usually much
                    faster.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={150} className="lg:col-span-3">
            <SignupForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
