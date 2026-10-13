import Link from "next/link";
import Logo from "./Logo";
import { IconMail, IconMapPin, IconPhone } from "./icons";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-300 bg-sky-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-slate-500 md:mx-0">
              Australia&apos;s advanced trading and investment platform —
              institutional-grade technology, deep liquidity and expert insights
              for every trader.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-cyan-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li className="flex items-start justify-center gap-2.5 md:justify-start">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                <a
                  href="mailto:support@euroquantum-au.com"
                  className="transition-colors hover:text-cyan-600"
                >
                  support@euroquantum-au.com
                </a>
              </li>
              <li className="flex items-start justify-center gap-2.5 md:justify-start">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                <a
                  href="tel:+61280000000"
                  className="transition-colors hover:text-cyan-600"
                >
                  +61 2 8000 0000
                </a>
              </li>
              <li className="flex items-start justify-center gap-2.5 md:justify-start">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                Sydney, NSW 2000, Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 text-center md:text-left">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
            Risk Warning
          </h4>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Trading crypto, forex, stocks and commodities involves significant
            risk and may not suit every investor. You may lose some or all of
            your capital. Past performance does not guarantee future results.
            Only trade with money you can afford to lose.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 md:flex-row">
          <p>© {currentYear} EuroQuantum. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-slate-600">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-slate-600">
              Terms &amp; Conditions
            </Link>
            <Link href="/disclaimer" className="transition-colors hover:text-slate-600">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
