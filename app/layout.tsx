import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://euroquantum-au.com"),
  title: {
    default: "EuroQuantum | Advanced Trading & Investment Solutions in Australia",
    template: "%s | EuroQuantum",
  },
  description:
    "EuroQuantum is Australia's advanced trading platform for forex, CFDs, crypto and managed investment portfolios. Trade with institutional-grade technology, deep liquidity and 24/7 support.",
  keywords: [
    "EuroQuantum",
    "EuroQuantum trading",
    "trading platform Australia",
    "forex trading Australia",
    "CFD trading",
    "crypto trading",
    "managed investment portfolios",
    "investment solutions Australia",
  ],
  authors: [{ name: "EuroQuantum" }],
  creator: "EuroQuantum",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://euroquantum-au.com",
    siteName: "EuroQuantum",
    title: "EuroQuantum | Advanced Trading & Investment Solutions",
    description:
      "Trade forex, CFDs, crypto and managed portfolios with Australia's advanced trading platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EuroQuantum | Advanced Trading & Investment Solutions",
    description:
      "Trade forex, CFDs, crypto and managed portfolios with Australia's advanced trading platform.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EuroQuantum",
  url: "https://euroquantum-au.com",
  description:
    "EuroQuantum is an advanced trading and investment platform offering forex, CFD and crypto trading along with managed investment portfolios to Australian clients.",
  email: "support@euroquantum-au.com",
  areaServed: "AU",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@euroquantum-au.com",
    telephone: "+61 2 8000 0000",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sky-50 text-slate-900">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if (navigator.maxTouchPoints === 0) document.documentElement.classList.add('mouse-device');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
