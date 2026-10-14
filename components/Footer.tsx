import Link from "next/link";
import Logo from "./Logo";
import { IconMail } from "./icons";

const currentYear = new Date().getFullYear();

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "AI Trading" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/reviews", label: "EuroQuantum Review" },
  { href: "/faqs", label: "FAQ" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms And Conditions" },
  { href: "/disclaimer", label: "Risk Disclaimer" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-300 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-slate-500 md:mx-0 md:max-w-xs">
              Australia&apos;s advanced trading and investment platform —
              institutional-grade technology, deep liquidity and expert insights
              for every trader.
            </p>
            <a
              href="mailto:support@euroquantum-au.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-green-600"
            >
              <IconMail className="h-4 w-4 shrink-0 text-green-600" />
              support@euroquantum-au.com
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-green-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-green-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 text-center md:text-left">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-green-600">
            Risk Warning
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Trading crypto, forex, stocks and commodities involves significant
            risk and may not suit every investor. You may lose some or all of
            your capital. Past performance does not guarantee future results.
            Only trade with money you can afford to lose.
          </p>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>© {currentYear} EuroQuantum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
