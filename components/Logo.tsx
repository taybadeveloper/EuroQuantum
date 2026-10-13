import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="EuroQuantum — Home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
        <span className="font-display text-sm font-bold tracking-tight text-white">
          EQ
        </span>
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/25" />
      </span>
      <span className="flex flex-col leading-none text-left">
        <span className="font-display text-lg font-bold tracking-tight text-slate-900">
          Euro<span className="text-gradient">Quantum</span>
        </span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          AI Trading · Australia
        </span>
      </span>
    </Link>
  );
}
