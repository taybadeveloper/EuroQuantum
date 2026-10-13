import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read EuroQuantum's risk disclaimer — trading leveraged products carries significant risk and the information on this website is general in nature.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      subtitle="Please read this disclaimer carefully. It outlines the risks associated with trading and the limits on the information we provide."
      lastUpdated="8 October 2026"
    >
      <LegalSection heading="1. General Information Only">
        <p>
          All information on this website — including market commentary,
          analysis, articles and educational material — is provided for general
          informational purposes only. It does not take into account your
          personal objectives, financial situation or needs, and should not be
          relied upon as the sole basis for any trading or investment decision.
        </p>
      </LegalSection>

      <LegalSection heading="2. No Financial Advice">
        <p>
          EuroQuantum does not provide personal financial product advice. Nothing
          on this website constitutes a recommendation, offer or solicitation to
          buy or sell any financial instrument. You should consider whether any
          product or service is appropriate for you, having regard to your own
          circumstances, and obtain independent financial, legal and taxation
          advice before acting.
        </p>
      </LegalSection>

      <LegalSection heading="3. Trading Risk Disclosure">
        <p>
          Trading foreign exchange, contracts for difference (CFDs),
          cryptocurrencies and other leveraged products carries a high level of
          risk and may not be suitable for all investors. The use of leverage
          means that both gains and losses are magnified.{" "}
          <strong className="text-slate-700">
            You may lose more than your initial investment, and in some
            circumstances losses can substantially exceed your deposit.
          </strong>{" "}
          Only trade with money you can afford to lose.
        </p>
      </LegalSection>

      <LegalSection heading="4. No Guarantee of Results">
        <p>
          Past performance — whether actual, hypothetical or back-tested — is
          not a reliable indicator of future results. No representation is made
          that any account will achieve profits or losses similar to those
          shown. Market conditions, volatility and execution factors mean
          outcomes will vary.
        </p>
      </LegalSection>

      <LegalSection heading="5. Market Data & Third-Party Content">
        <p>
          Market data, prices and news displayed on our platform are provided
          by third-party sources and may be delayed, inaccurate or incomplete.
          EuroQuantum is not responsible for the accuracy or completeness of
          third-party content, nor for any loss arising from reliance upon it.
        </p>
      </LegalSection>

      <LegalSection heading="6. Technology & Availability">
        <p>
          While we strive to maintain continuous availability, our platform may
          be subject to outages, maintenance or interruptions. EuroQuantum is
          not liable for losses arising from technical failures, internet
          connectivity issues or circumstances beyond our reasonable control.
        </p>
      </LegalSection>

      <LegalSection heading="7. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, EuroQuantum excludes all
          liability for any loss or damage arising from the use of this website
          or reliance on its content, except where such liability cannot be
          excluded under the Australian Consumer Law.
        </p>
      </LegalSection>

      <LegalSection heading="8. Professional Advice Recommended">
        <p>
          Before opening an account or entering into any transaction, we
          strongly recommend that you seek independent advice from a licensed
          financial adviser, accountant or solicitor who understands your
          individual circumstances.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact Us">
        <p>
          If you have questions about this disclaimer, contact us at{" "}
          <a
            href="mailto:support@euroquantum-au.com"
            className="text-cyan-600 transition-colors hover:text-cyan-700"
          >
            support@euroquantum-au.com
          </a>{" "}
          or Sydney, NSW 2000, Australia.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
