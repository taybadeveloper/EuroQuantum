"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { IconMenu, IconX } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works", shortLabel: "Works" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-300 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Logo />

        <div className="hidden items-center gap-4 lg:flex lg:gap-6">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap text-sm font-medium transition-colors ${
                  active ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.shortLabel ? (
                  <>
                    <span className="hidden lg:inline">{link.label}</span>
                    <span className="lg:hidden">{link.shortLabel}</span>
                  </>
                ) : (
                  link.label
                )}
              </Link>
            );
          })}
          <Link
            href="/get-started"
            className="hidden rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md lg:inline-flex"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:text-slate-900 lg:hidden"
        >
          {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-slate-200 bg-white px-6 pb-6 pt-3 shadow-lg lg:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block whitespace-nowrap border-b border-slate-100 py-3.5 text-sm font-medium transition-colors ${
                  active ? "text-green-600" : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/get-started"
            className="mt-5 block rounded-full bg-green-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
