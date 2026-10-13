import {
  IconActivity,
  IconBitcoin,
  IconBriefcase,
  IconChart,
  IconLayers,
  IconShield,
} from "@/components/icons";
import type { ReactNode } from "react";

export type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
};

export const services: Service[] = [
  {
    title: "Forex Trading",
    description:
      "Trade 60+ major, minor and exotic currency pairs with institutional-grade pricing and razor-thin spreads.",
    icon: <IconChart className="h-6 w-6" />,
    features: [
      "60+ currency pairs",
      "Spreads from 0.0 pips",
      "Leverage up to 1:500",
      "24/5 market access",
    ],
  },
  {
    title: "CFD Trading",
    description:
      "Gain exposure to global indices, commodities and equities without owning the underlying asset.",
    icon: <IconLayers className="h-6 w-6" />,
    features: [
      "300+ global instruments",
      "Indices, commodities & shares",
      "Long and short positions",
      "Real-time pricing",
    ],
  },
  {
    title: "Crypto Trading",
    description:
      "Buy, sell and trade Bitcoin, Ethereum and 40+ leading cryptocurrencies with deep liquidity and competitive fees.",
    icon: <IconBitcoin className="h-6 w-6" />,
    features: [
      "40+ digital assets",
      "Cold-storage security",
      "24/7 trading",
      "Instant AUD deposits",
    ],
  },
  {
    title: "Managed Portfolios",
    description:
      "Let our expert team manage diversified investment portfolios tailored to your risk profile and financial goals.",
    icon: <IconBriefcase className="h-6 w-6" />,
    features: [
      "Personalised strategies",
      "Professional risk management",
      "Quarterly performance reports",
      "Transparent fee structure",
    ],
  },
  {
    title: "Market Analysis & Signals",
    description:
      "Daily technical and fundamental analysis, trade signals and market insights from our dedicated research desk.",
    icon: <IconActivity className="h-6 w-6" />,
    features: [
      "Daily market briefings",
      "Actionable trade signals",
      "Economic calendar",
      "Webinars & tutorials",
    ],
  },
  {
    title: "Risk Management Solutions",
    description:
      "Protect your capital with advanced risk tools, custom hedging strategies and automated drawdown protection.",
    icon: <IconShield className="h-6 w-6" />,
    features: [
      "Negative balance protection",
      "Custom stop-loss tools",
      "Hedging strategies",
      "Volatility alerts",
    ],
  },
];
