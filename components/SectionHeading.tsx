type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left";

  return (
    <div className={alignment}>
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 leading-relaxed text-slate-600">{subtitle}</p>}
    </div>
  );
}
