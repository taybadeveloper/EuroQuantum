import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read EuroQuantum's privacy policy — how we collect, use, store and protect your personal information in accordance with the Australian Privacy Act 1988.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This policy explains how EuroQuantum collects, uses, stores and protects your personal information."
      lastUpdated="8 October 2026"
    >
      <LegalSection heading="1. Introduction">
        <p>
          EuroQuantum (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is
          committed to protecting the privacy of our clients and website
          visitors. This Privacy Policy explains how we collect, use, disclose
          and safeguard your personal information when you use our website,
          platform and services.
        </p>
        <p>
          We handle personal information in accordance with the Australian
          Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) and
          other applicable privacy laws.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-700">Personal identification information</strong> —
            name, date of birth, address, contact details and tax file information.
          </li>
          <li>
            <strong className="text-slate-700">Verification documents</strong> —
            government-issued ID, proof of address and other documents required
            under anti-money laundering (AML) and counter-terrorism financing
            (CTF) laws.
          </li>
          <li>
            <strong className="text-slate-700">Financial information</strong> —
            trading history, account balances, deposit and withdrawal details,
            and source of funds documentation.
          </li>
          <li>
            <strong className="text-slate-700">Technical information</strong> —
            IP address, browser type, device information, pages visited and
            other usage data collected via cookies and similar technologies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>We use your personal information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Open, administer and manage your trading account.</li>
          <li>Verify your identity and comply with legal and regulatory obligations.</li>
          <li>Process deposits, withdrawals and transactions.</li>
          <li>Provide customer support and respond to your enquiries.</li>
          <li>Improve our platform, products and services.</li>
          <li>Send you service updates, market insights and promotional material
            (where you have opted in).</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Disclosure of Your Information">
        <p>
          We do not sell your personal information. We may disclose your
          information to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Regulators, government bodies and law enforcement where required by law.</li>
          <li>Our liquidity providers, payment processors and professional advisers.</li>
          <li>Service providers who assist us in operating our platform, under
            strict confidentiality obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Data Security">
        <p>
          We use bank-grade encryption, firewalls and access controls to protect
          your information from unauthorised access, alteration or disclosure.
          Client funds are held in segregated accounts with reputable Australian
          banks. While we take reasonable steps to secure your data, no method
          of transmission over the internet is completely secure.
        </p>
      </LegalSection>

      <LegalSection heading="6. Cookies">
        <p>
          Our website uses cookies and similar technologies to improve your
          browsing experience, analyse site traffic and personalise content.
          You can control or disable cookies through your browser settings,
          although some features of the site may not function properly.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights">
        <p>
          You have the right to request access to, and correction of, the
          personal information we hold about you. You may also request deletion
          of your data where we are not required by law to retain it. To make a
          request, contact us using the details below.
        </p>
      </LegalSection>

      <LegalSection heading="8. Data Retention">
        <p>
          We retain your personal information only for as long as necessary to
          provide our services and to satisfy our legal and regulatory
          obligations, after which it is securely destroyed or de-identified.
        </p>
      </LegalSection>

      <LegalSection heading="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Material changes
          will be notified via our website or email. Continued use of our
          services after any changes constitutes acceptance of the revised policy.
        </p>
      </LegalSection>

      <LegalSection heading="10. Contact Us">
        <p>
          If you have any questions or concerns about this Privacy Policy or
          how we handle your information, please contact our Privacy Officer at{" "}
          <a
            href="mailto:privacy@euroquantum-au.com"
            className="text-cyan-600 transition-colors hover:text-cyan-700"
          >
            privacy@euroquantum-au.com
          </a>{" "}
          or write to us at Sydney, NSW 2000, Australia.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
