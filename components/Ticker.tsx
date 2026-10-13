const pairs = [
  { symbol: "EUR/USD", price: "1.0842", change: "+0.32%" },
  { symbol: "AUD/USD", price: "0.6531", change: "-0.14%" },
  { symbol: "GBP/USD", price: "1.2718", change: "+0.21%" },
  { symbol: "USD/JPY", price: "149.36", change: "+0.08%" },
  { symbol: "XAU/USD", price: "2,384.50", change: "+0.55%" },
  { symbol: "BTC/USD", price: "67,240", change: "+1.82%" },
  { symbol: "ETH/USD", price: "3,512.40", change: "-0.46%" },
  { symbol: "S&P 500", price: "5,341.20", change: "+0.11%" },
  { symbol: "ASX 200", price: "7,795.30", change: "-0.09%" },
];

export default function Ticker() {
  return (
    <div className="group relative overflow-hidden border-y border-slate-200 bg-white py-3.5">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...pairs, ...pairs].map((pair, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 whitespace-nowrap px-6 text-sm"
          >
            <span className="font-medium text-slate-700">{pair.symbol}</span>
            <span className="tabular-nums text-slate-500">{pair.price}</span>
            <span
              className={`tabular-nums font-medium ${
                pair.change.startsWith("+") ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {pair.change}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-sky-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-sky-50 to-transparent" />
    </div>
  );
}
