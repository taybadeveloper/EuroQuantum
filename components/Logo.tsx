import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="EuroQuantum — Home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl border-2 border-green-500">
        <span className="font-display text-sm font-bold tracking-tight text-green-600">
          EQ
        </span>
      </span>
      <span className="flex flex-col leading-none text-left">
        <span className="font-display text-lg font-bold tracking-tight text-slate-900">
          Euro<span className="text-green-600">Quantum</span>
        </span>
      </span>
    </Link>
  );
}
