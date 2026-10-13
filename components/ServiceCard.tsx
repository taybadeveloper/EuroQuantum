import Link from "next/link";
import Reveal from "./Reveal";
import { IconArrowRight, IconCheck } from "./icons";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  delay?: number;
};

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:bg-stone-50 hover:shadow-md">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-600 ring-1 ring-slate-900/10">
          {service.icon}
        </div>
        <h3 className="font-display text-xl font-semibold text-slate-900">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 transition-colors hover:text-green-700"
        >
          Get Started
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Reveal>
  );
}
