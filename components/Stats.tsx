"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 85000, suffix: "+", label: "Active Traders" },
  { value: 4.2, prefix: "$", suffix: "B+", label: "Monthly Trading Volume", decimals: 1 },
  { value: 24, suffix: "/7", label: "Market Access & Support" },
];

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  start: boolean;
};

function Counter({ value, prefix = "", suffix = "", decimals = 0, start }: CounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1600;
    const t0 = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  const formatted = display.toLocaleString("en-AU", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 py-10 text-center lg:px-8">
            <p className="font-display text-3xl font-bold tracking-tight text-gradient md:text-4xl">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
                start={start}
              />
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500 md:text-sm md:normal-case md:tracking-normal">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
