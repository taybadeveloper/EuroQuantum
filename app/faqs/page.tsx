import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  alternates: { canonical: "/faqs" },
  title: "FAQs",
  description:
    "Answers to common questions about EuroQuantum — Australia's AI trading platform. Deposits, withdrawals, markets, security and how to get started.",
};

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
    q: "How does the AI choose trades?",
    a: "It studies price history, trends and market volume to spot patterns. It then shows you trade ideas you can accept or ignore.",
  },
  {
    q: "What markets can I trade?",
    a: "Crypto, forex, stocks and commodities. The AI scans all four around the clock.",
  },
  {
    q: "How do I fund my account?",
    a: "After sign-up, your account manager walks you through the payment options available in Australia, starting from AU$250.",
  },
  {
    q: "Can I withdraw my money?",
    a: "Yes. You can request a withdrawal from your dashboard at any time.",
  },
  {
    q: "Is my money and data safe?",
    a: "EuroQuantum uses SSL encryption for your personal details and keeps clear, easy-to-find terms. As with any trading, your capital is at risk.",
  },
  {
    q: "Are there hidden fees?",
    a: "No hidden fees. Our terms, privacy policy and risk disclosure are available at the bottom of every page.",
  },
  {
    q: "How long does sign-up take?",
    a: "Less than two minutes. Just fill in the form on the Get Started page.",
  },
  {
    q: "Is EuroQuantum legit?",
    a: "EuroQuantum is a real platform with secure sign-up, clear terms and a full risk disclosure. As with any trading, your capital is at risk.",
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

export default function FaqsPage() {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-slate-300 pb-16 pt-30">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-slate-500/[0.05] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Everything Australians ask before joining EuroQuantum — deposits,
              markets, security, withdrawals and more.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ list ---------- */}
      <section className="border-t border-slate-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <Reveal>
            <SectionHeading
              eyebrow="Your Questions"
              title="Straight Answers, No Jargon"
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12">
              <FaqAccordion items={faqs} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
