import type { Metadata } from "next";
import {
  LegalShell,
  Section,
  SubHeading,
  P,
  Note,
  Bullets,
  Bullet,
  B,
  Mail,
  ContactCard,
  ContactRow,
} from "../_components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Esha Bargate Productions",
  description:
    "How Esha Bargate Productions, LLC collects, uses, discloses, and safeguards your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      effectiveDate="June 11, 2026"
      lastUpdated="June 11, 2026"
      intro={
        <>
          <P>
            This Privacy Policy explains how Esha Bargate Productions, LLC
            (&ldquo;Esha Bargate Productions,&rdquo; &ldquo;EBP,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
            uses, discloses, and safeguards your personal information when you
            visit our website at{" "}
            <a
              href="https://esha-bargate-productions.vercel.app/"
              className="text-brand hover:text-brand-light transition break-words"
            >
              https://esha-bargate-productions.vercel.app/
            </a>{" "}
            (the &ldquo;Site&rdquo;) or otherwise interact with us. We are a
            media production and marketing agency established in 2024, operating
            across three verticals — Digital &amp; AI Frontier, Cinematic
            Legacy, and Vertical Drama — with operations associated with San
            Francisco, Los Angeles, and Mumbai.
          </P>
          <P>
            We are committed to protecting your privacy and handling your
            personal information transparently and in accordance with applicable
            data protection laws, including the EU and UK General Data
            Protection Regulation (GDPR), the California Consumer Privacy Act as
            amended by the California Privacy Rights Act (CCPA/CPRA), India&apos;s
            Digital Personal Data Protection Act, 2023 (DPDP Act), Brazil&apos;s
            Lei Geral de Proteção de Dados (LGPD), Canada&apos;s Personal
            Information Protection and Electronic Documents Act (PIPEDA), and
            other applicable frameworks.
          </P>
        </>
      }
    >
      <Note>
        <B>Note:</B> This Site does not process payments and does not collect
        payment card or financial account information.
      </Note>

      <Section n="1." title="Who We Are (Data Controller)">
        <P>
          For the purposes of the GDPR and similar laws, Esha Bargate
          Productions, LLC is the &ldquo;data controller&rdquo; (or &ldquo;data
          fiduciary&rdquo; under the DPDP Act) responsible for your personal
          information.
        </P>
        <P>You can contact us at:</P>
        <Bullets>
          <Bullet>
            <B>General inquiries:</B>{" "}
            <Mail address="contact@eshabargateproductions.com" />
          </Bullet>
          <Bullet>
            <B>Careers:</B> <Mail address="eshabargateproductions@gmail.com" />
          </Bullet>
          <Bullet>
            <B>WhatsApp:</B> +1 510-953-2966
          </Bullet>
          <Bullet>
            <B>Location:</B> San Francisco, CA, United States
          </Bullet>
        </Bullets>
      </Section>

      <Section n="2." title="Information We Collect">
        <P>We collect the following categories of personal information:</P>

        <SubHeading>a) Information you provide directly:</SubHeading>
        <Bullets>
          <Bullet>
            <B>Contact / &ldquo;Send a Message&rdquo; form:</B> When you complete
            the contact form on our Site, we collect your name, email address,
            and the details of your project or inquiry. All fields on this form
            are required.
          </Bullet>
          <Bullet>
            <B>Newsletter subscription (&ldquo;The EBP Dispatch&rdquo;):</B> When
            you subscribe to our monthly newsletter, we collect your email
            address.
          </Bullet>
          <Bullet>
            <B>Career inquiries:</B> When you send your reel and résumé, we
            collect your name, email address, and any information contained in
            the materials you submit.
          </Bullet>
          <Bullet>
            <B>
              Investor, distribution, licensing, and partnership inquiries:
            </B>{" "}
            When you contact us by email or WhatsApp about investor relations,
            screenings, catalog requests, brand placement, or collaborations, we
            collect your name, contact details, and the contents of your
            communication.
          </Bullet>
        </Bullets>

        <SubHeading>b) Information collected automatically:</SubHeading>
        <Bullets>
          <Bullet>
            <B>Analytics and usage data:</B> Our Site is hosted on Vercel and
            may use Vercel Web Analytics and Vercel Speed Insights, which are
            privacy-focused, cookieless analytics tools. Per Vercel&apos;s
            published Data Point Information, these tools collect anonymized,
            aggregated data points including event timestamp, page URL and
            dynamic path, referrer, filtered query parameters, approximate
            geolocation (to city level, e.g., &ldquo;US, California, San
            Francisco&rdquo;), device operating system and version, browser and
            version, and device type (mobile/desktop/tablet). This data is not
            tied to or associated with any individual, customer, or IP address.
          </Bullet>
          <Bullet>
            <B>Server and hosting logs:</B> As our hosting provider, Vercel
            processes technical data including IP addresses and system
            configuration information in the course of delivering the Site.
          </Bullet>
        </Bullets>

        <SubHeading>c) Cookies and similar technologies:</SubHeading>
        <P>See Section 6 below.</P>
        <P>
          We do not knowingly collect special categories of sensitive personal
          data through the Site, and we ask that you do not submit such
          information through our forms.
        </P>
      </Section>

      <Section n="3." title="How We Use Your Information (Purposes of Processing)">
        <P>We use your personal information to:</P>
        <Bullets>
          <Bullet>
            Respond to your inquiries and communicate with you about projects,
            collaborations, investment, distribution, licensing, and partnership
            opportunities;
          </Bullet>
          <Bullet>
            Send you our newsletter and marketing communications where you have
            requested them;
          </Bullet>
          <Bullet>Review and respond to career and talent submissions;</Bullet>
          <Bullet>
            Operate, maintain, secure, and improve our Site and understand how
            visitors use it;
          </Bullet>
          <Bullet>Comply with legal obligations and enforce our terms; and</Bullet>
          <Bullet>
            Protect against fraud, security incidents, and misuse of the Site.
          </Bullet>
        </Bullets>
        <P>
          We do not sell your personal information, and we do not share it for
          cross-context behavioral advertising or targeted advertising.
        </P>
      </Section>

      <Section n="4." title="Legal Bases for Processing (GDPR / UK GDPR)">
        <P>
          Where the GDPR or UK GDPR applies, we rely on the following legal
          bases under Article 6:
        </P>
        <Bullets>
          <Bullet>
            <B>Consent (Art. 6(1)(a)):</B> for sending you our newsletter and
            marketing emails, and for any non-essential cookies or analytics
            where consent is required. You may withdraw consent at any time
            without affecting the lawfulness of processing carried out before
            withdrawal.
          </Bullet>
          <Bullet>
            <B>
              Performance of a contract or steps prior to a contract (Art.
              6(1)(b)):
            </B>{" "}
            to respond to your inquiries and take steps at your request before
            entering into any engagement.
          </Bullet>
          <Bullet>
            <B>Legitimate interests (Art. 6(1)(f)):</B> to operate, secure, and
            improve our Site, respond to business inquiries, and understand site
            usage, provided these interests are not overridden by your rights
            and freedoms.
          </Bullet>
          <Bullet>
            <B>Legal obligation (Art. 6(1)(c)):</B> where we must process data to
            comply with applicable law.
          </Bullet>
        </Bullets>
        <P>
          Under India&apos;s DPDP Act, we process your personal data primarily
          on the basis of your <B>consent</B> or for a <B>legitimate use</B>,
          such as where you voluntarily provide your data for a specified
          purpose and have not indicated that you do not consent to its
          processing.
        </P>
      </Section>

      <Section n="5." title="How We Share Your Information">
        <P>We may share personal information with:</P>
        <Bullets>
          <Bullet>
            <B>Service providers and processors</B> who help us operate our Site
            and business, including our hosting and analytics provider, Vercel
            Inc., and any email or form-handling services we use to receive and
            respond to messages;
          </Bullet>
          <Bullet>
            <B>Professional advisers</B> such as lawyers and accountants where
            necessary;
          </Bullet>
          <Bullet>
            <B>Authorities or third parties</B> where required by law,
            regulation, legal process, or to protect our rights, safety, or
            property; and
          </Bullet>
          <Bullet>
            <B>Successors</B> in connection with a merger, acquisition,
            financing, or sale of assets, subject to the protections described
            in this Policy.
          </Bullet>
        </Bullets>
        <P>
          We do not sell or rent your personal information to third parties.
        </P>
      </Section>

      <Section n="6." title="Cookies and Similar Technologies">
        <P>
          Our Site is built with Next.js and hosted on Vercel. Vercel Web
          Analytics and Speed Insights are designed to be cookieless — they do
          not use cookies and instead, per Vercel&apos;s documentation, identify
          visitors using a temporary hash created from the incoming request;
          that hash &ldquo;is valid for a single day, at which point it is
          automatically reset,&rdquo; and the data is automatically discarded
          after 24 hours and is not tied to your identity or IP address.
        </P>
        <P>
          We may use strictly necessary cookies or local storage required for
          the Site to function. If we deploy any non-essential or analytics
          cookies that require consent under the EU ePrivacy Directive and GDPR,
          we will request your consent through a cookie banner before they are
          placed, with &ldquo;Accept&rdquo; and &ldquo;Reject&rdquo; options of
          equal prominence, granular control by purpose, and the ability to
          withdraw consent at any time.
        </P>
        <P>
          You can also control cookies through your browser settings. For
          EU/EEA and UK users, where consent is required, non-essential cookies
          will not be set until you provide it.
        </P>
      </Section>

      <Section n="7." title="International Data Transfers">
        <P>
          We are based in the United States, and our hosting provider Vercel
          processes data primarily in the United States and may process it
          elsewhere in the world. As a result, your personal information may be
          transferred to, stored in, and processed in countries other than your
          own, which may have different data protection laws.
        </P>
        <P>
          Where we transfer personal data out of the EU/EEA, the UK, or
          Switzerland, we rely on appropriate safeguards, including the European
          Commission&apos;s 2021 Standard Contractual Clauses (Decision
          2021/914) and the UK International Data Transfer Addendum (IDTA). In
          addition, per Vercel&apos;s Privacy Policy, &ldquo;Vercel complies with
          the EU-U.S. Data Privacy Framework (EU-U.S. DPF), the UK Extension to
          the EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework (Swiss-U.S.
          DPF) as set forth by the U.S. Department of Commerce,&rdquo; providing
          an additional recognized transfer mechanism for personal data sent to
          the United States. The U.S. Federal Trade Commission has jurisdiction
          over Vercel&apos;s DPF compliance.
        </P>
      </Section>

      <Section n="8." title="Data Retention">
        <P>
          We retain personal information only for as long as necessary to
          fulfill the purposes for which it was collected, including to satisfy
          any legal, accounting, or reporting requirements.
        </P>
        <Bullets>
          <Bullet>
            <B>Contact and inquiry data:</B> retained for as long as needed to
            handle your inquiry and our ongoing relationship, and for a
            reasonable period thereafter to address follow-up questions or
            disputes.
          </Bullet>
          <Bullet>
            <B>Newsletter data:</B> retained until you unsubscribe or withdraw
            consent.
          </Bullet>
          <Bullet>
            <B>Career submissions:</B> retained for the duration of any
            consideration process and a reasonable period thereafter, unless you
            ask us to delete them.
          </Bullet>
        </Bullets>
        <P>
          When personal data is no longer required and no legal basis exists to
          retain it, we will delete or anonymize it.
        </P>
      </Section>

      <Section n="9." title="Your Privacy Rights">
        <P>
          Depending on where you live, you may have some or all of the following
          rights:
        </P>

        <SubHeading>GDPR / UK GDPR (EU, EEA, UK):</SubHeading>
        <Bullets>
          <Bullet>The right to be informed;</Bullet>
          <Bullet>The right of access;</Bullet>
          <Bullet>The right to rectification;</Bullet>
          <Bullet>The right to erasure (&ldquo;right to be forgotten&rdquo;);</Bullet>
          <Bullet>The right to restrict processing;</Bullet>
          <Bullet>The right to data portability;</Bullet>
          <Bullet>The right to object; and</Bullet>
          <Bullet>
            Rights related to automated decision-making and profiling.
          </Bullet>
        </Bullets>
        <P>
          You also have the right to withdraw consent at any time and the right
          to lodge a complaint with your local supervisory authority (for
          example, in Ireland the Data Protection Commission, or in the UK the
          Information Commissioner&apos;s Office).
        </P>

        <SubHeading>California (CCPA/CPRA):</SubHeading>
        <Bullets>
          <Bullet>
            The right to know/access the personal information we collect, use,
            and disclose;
          </Bullet>
          <Bullet>The right to delete personal information;</Bullet>
          <Bullet>The right to correct inaccurate personal information;</Bullet>
          <Bullet>
            The right to opt out of the sale or sharing of personal information
            (note: we do not sell or share personal information);
          </Bullet>
          <Bullet>
            The right to limit the use of sensitive personal information (we do
            not use sensitive personal information for purposes requiring this
            right); and
          </Bullet>
          <Bullet>
            The right to non-discrimination for exercising your rights.
          </Bullet>
        </Bullets>
        <P>
          We honor recognized opt-out preference signals such as Global Privacy
          Control (GPC) where applicable.
        </P>

        <SubHeading>India (DPDP Act):</SubHeading>
        <P>
          You have the right to access a summary of your personal data and
          processing activities, the right to correction and erasure, the right
          to grievance redressal, and the right to nominate another individual
          to exercise your rights in the event of death or incapacity. You may
          withdraw consent at any time, and we will provide a means to do so.
        </P>

        <SubHeading>Other jurisdictions:</SubHeading>
        <P>
          For example, Brazil&apos;s LGPD, Canada&apos;s PIPEDA, and US state
          privacy laws such as those in Virginia, Colorado, Connecticut, Texas,
          Oregon, and others: You may have comparable rights to access, correct,
          delete, port, and object to the processing of your personal
          information, and to withdraw consent.
        </P>
        <P>
          To exercise any of these rights, contact us at{" "}
          <Mail address="contact@eshabargateproductions.com" />. We will respond
          within the timeframes required by applicable law (generally within 30
          to 45 days, extendable where permitted). We may need to verify your
          identity before fulfilling your request, and we will not discriminate
          against you for exercising your rights.
        </P>
      </Section>

      <Section n="10." title="Children's Privacy">
        <P>
          Our Site is intended for a general, professional audience and is not
          directed to children. We do not knowingly collect personal information
          from children under the age of 13 (or under the applicable age of
          digital consent in your jurisdiction, which may be up to 16 in the
          EU/EEA). Under India&apos;s DPDP Act, individuals under 18 are treated
          as children, and verifiable parental or guardian consent is required
          before processing their personal data. If you believe a child has
          provided us with personal information without appropriate consent,
          please contact us and we will delete it promptly.
        </P>
      </Section>

      <Section n="11." title="Data Security">
        <P>
          We implement reasonable technical and organizational measures to
          protect your personal information against unauthorized access,
          disclosure, alteration, and destruction. Our Site is served over
          encrypted HTTPS/TLS connections.
        </P>
        <P>
          Our hosting provider, Vercel, maintains industry-standard security
          practices. Per Vercel&apos;s Security &amp; Compliance Measures
          documentation, &ldquo;Vercel has a SOC 2 Type 2 attestation for
          Security, Confidentiality, and Availability&rdquo; and &ldquo;Vercel is
          ISO 27001:2022 certified&rdquo; (the ISO 27001 certification was
          audited by independent assessor Schellman). Vercel maintains customer
          data in an encrypted format at rest using AES-256 and in transit using
          TLS 1.2 or higher.
        </P>
        <P>
          However, no method of transmission or storage over the Internet is
          completely secure, and we cannot guarantee absolute security. In the
          event of a personal data breach, we will notify the relevant
          supervisory authorities and affected individuals where and within the
          timeframes required by applicable law.
        </P>
      </Section>

      <Section n="12." title="Third-Party Links and Services">
        <P>
          Our Site links to and references third-party platforms and services,
          including Apple TV, Google TV, IMDb, WhatsApp, social media platforms,
          and calendar/scheduling tools. We are not responsible for the privacy
          practices of these third parties. We encourage you to review their
          privacy policies before providing them with your personal information.
        </P>
      </Section>

      <Section n="13." title="Marketing Communications">
        <P>
          If you subscribe to our newsletter or otherwise opt in to marketing,
          you can unsubscribe at any time by clicking the unsubscribe link in
          any email or by contacting us directly. We will honor opt-out requests
          promptly (and, in any case, within 10 business days as required under
          the US CAN-SPAM Act). In accordance with the CAN-SPAM Act and similar
          laws, our marketing emails will identify us as the sender, use
          accurate subject lines and header information, include a valid
          physical postal address, and provide a clear means to opt out. We will
          not charge a fee or require information beyond your email address to
          honor an opt-out request.
        </P>
      </Section>

      <Section n="14." title="Changes to This Privacy Policy">
        <P>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, technology, or legal requirements. We will post the
          updated version on this page and revise the &ldquo;Last Updated&rdquo;
          date above. Where a change materially affects how we use your data or
          alters the basis on which you provided consent, we will notify you
          and, where required by law, obtain fresh consent.
        </P>
      </Section>

      <Section n="15." title="Contact Us">
        <P>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or your personal information, please contact us:
        </P>
        <ContactCard>
          <p className="font-heading font-bold text-foreground tracking-tight">
            Esha Bargate Productions, LLC
          </p>
          <ContactRow label="Email">
            <Mail address="contact@eshabargateproductions.com" />
          </ContactRow>
          <ContactRow label="Careers">
            <Mail address="eshabargateproductions@gmail.com" />
          </ContactRow>
          <ContactRow label="WhatsApp">+1 510-953-2966</ContactRow>
          <ContactRow label="Location">
            San Francisco, CA, United States
          </ContactRow>
        </ContactCard>
      </Section>
    </LegalShell>
  );
}
