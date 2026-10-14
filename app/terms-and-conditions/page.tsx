import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  alternates: { canonical: "/terms-and-conditions" },
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing the use of EuroQuantum's website, trading platform and services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      subtitle="These terms govern your use of the EuroQuantum website, trading platform and services. Please read them carefully before opening an account."
      lastUpdated="8 October 2026"
    >
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          By accessing our website or using our services, you agree to be bound
          by these Terms &amp; Conditions, our Privacy Policy and any other
          policies referenced herein. If you do not agree, you must not use our
          services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility">
        <p>
          Our services are available to individuals who are at least 18 years of
          age and who are not prohibited from using our services under the laws
          of their jurisdiction. By registering an account, you represent that
          you meet these requirements and that the information you provide is
          accurate and complete.
        </p>
      </LegalSection>

      <LegalSection heading="3. Our Services">
        <p>
          EuroQuantum provides access to foreign exchange, contracts for
          difference (CFDs), cryptocurrency and managed portfolio services.
          All trading is conducted on an execution-only basis. We do not provide
          personal financial advice unless expressly agreed under a separate
          agreement.
        </p>
      </LegalSection>

      <LegalSection heading="4. Account Registration & Security">
        <p>
          You are responsible for maintaining the confidentiality of your login
          credentials and for all activity that occurs under your account. You
          must notify us immediately of any unauthorised use of your account or
          suspected security breach.
        </p>
      </LegalSection>

      <LegalSection heading="5. Deposits & Withdrawals">
        <p>
          Deposits may be made via bank transfer, card or supported
          cryptocurrencies. Withdrawals are processed to the source of funds
          wherever possible, subject to our verification and anti-money
          laundering checks. Withdrawal processing times vary by method.
        </p>
      </LegalSection>

      <LegalSection heading="6. Trading Risks">
        <p>
          Trading leveraged products carries a high level of risk and may not be
          suitable for all investors. You could lose more than your initial
          deposit. You should carefully consider your objectives, financial
          situation and risk tolerance before trading, and seek independent
          advice if necessary.
        </p>
      </LegalSection>

      <LegalSection heading="7. Prohibited Activities">
        <p>You must not use our platform to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Engage in market manipulation, insider trading or fraudulent activity.</li>
          <li>Launder money or finance terrorism.</li>
          <li>Attempt to disrupt, reverse-engineer or gain unauthorised access
            to our systems.</li>
          <li>Use automated trading tools that unfairly exploit latency or pricing errors.</li>
          <li>Open multiple accounts for the purpose of abusing promotions or bonuses.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="8. Fees">
        <p>
          Fees, spreads and financing charges are disclosed on our website and
          within your client agreement. We may amend fees from time to time by
          providing notice in accordance with our policies.
        </p>
      </LegalSection>

      <LegalSection heading="9. Intellectual Property">
        <p>
          All content on our website and platform — including text, graphics,
          logos, software and market data — is the property of EuroQuantum or
          its licensors and is protected by intellectual property laws. You may
          not copy, reproduce or distribute such content without our prior
          written consent.
        </p>
      </LegalSection>

      <LegalSection heading="10. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, EuroQuantum shall not be
          liable for any indirect, incidental, special or consequential loss —
          including loss of profits, trading losses or loss of data — arising
          from your use of our services, except where such liability cannot be
          excluded under the Australian Consumer Law.
        </p>
      </LegalSection>

      <LegalSection heading="11. Indemnification">
        <p>
          You agree to indemnify and hold harmless EuroQuantum, its directors,
          officers and employees from any claim, loss or damage arising from
          your breach of these terms or misuse of our services.
        </p>
      </LegalSection>

      <LegalSection heading="12. Termination">
        <p>
          We may suspend or terminate your account if you breach these terms,
          engage in prohibited activity or if we are required to do so by law
          or regulation. You may close your account at any time, subject to
          settlement of any outstanding obligations.
        </p>
      </LegalSection>

      <LegalSection heading="13. Governing Law">
        <p>
          These terms are governed by the laws of New South Wales, Australia.
          The parties submit to the exclusive jurisdiction of the courts of New
          South Wales.
        </p>
      </LegalSection>

      <LegalSection heading="14. Changes to These Terms">
        <p>
          We may update these Terms &amp; Conditions from time to time. Updated
          terms will be published on this page with a revised &ldquo;Last
          Updated&rdquo; date. Continued use of our services constitutes
          acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection heading="15. Contact Us">
        <p>
          Questions about these Terms &amp; Conditions? Contact us at{" "}
          <a
            href="mailto:legal@euroquantum-au.com"
            className="text-green-600 transition-colors hover:text-green-700"
          >
            legal@euroquantum-au.com
          </a>{" "}
          or Sydney, NSW 2000, Australia.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
