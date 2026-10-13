import Link from "next/link";
import Reveal from "@/components/Reveal";
import { IconArrowRight, IconHome } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pb-20 pt-40">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-green-500/[0.12] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-green-500/[0.13] blur-[120px]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <p className="text-gradient font-display text-8xl font-bold tracking-tight md:text-9xl">
            404
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Page Not Found
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back on track.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <IconHome className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-green-500/60 hover:text-slate-900"
            >
              Contact Support
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
