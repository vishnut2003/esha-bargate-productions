import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  Section,
  SubHeading,
  P,
  Legalese,
  Bullets,
  Bullet,
  B,
  Mail,
  ContactCard,
  ContactRow,
} from "../_components/legal";

export const metadata: Metadata = {
  title: "Terms of Use — Esha Bargate Productions",
  description:
    "The terms that govern your access to and use of the Esha Bargate Productions website.",
};

export default function TermsOfUsePage() {
  return (
    <LegalShell
      title="Terms of Use"
      effectiveDate="June 11, 2026"
      lastUpdated="June 11, 2026"
      intro={
        <>
          <P>
            Welcome to Esha Bargate Productions. These Terms of Use
            (&ldquo;Terms&rdquo;) govern your access to and use of the website
            located at{" "}
            <a
              href="https://esha-bargate-productions.vercel.app/"
              className="text-brand hover:text-brand-light transition break-words"
            >
              https://esha-bargate-productions.vercel.app/
            </a>{" "}
            (the &ldquo;Site&rdquo;), operated by Esha Bargate Productions, LLC
            (&ldquo;Esha Bargate Productions,&rdquo; &ldquo;EBP,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </P>
          <P>
            By accessing or using the Site, subscribing to our newsletter,
            submitting a form, or otherwise interacting with us through the
            Site, you agree to be bound by these Terms and our{" "}
            <Link
              href="/privacy-policy"
              className="text-brand hover:text-brand-light transition"
            >
              Privacy Policy
            </Link>
            . If you do not agree to these Terms, please do not use the Site.
          </P>
        </>
      }
    >
      <Section n="1." title="About Us">
        <P>
          Esha Bargate Productions is a media production and marketing agency
          operating across three verticals — Digital &amp; AI Frontier,
          Cinematic Legacy, and Vertical Drama — with operations associated with
          San Francisco, Los Angeles, and Mumbai.
        </P>
      </Section>

      <Section n="2." title="Eligibility">
        <P>
          The Site is intended for users who are at least 18 years of age (or
          the age of majority in your jurisdiction). By using the Site, you
          represent that you meet this requirement. The Site is not directed to
          children.
        </P>
      </Section>

      <Section n="3." title="Use of the Site">
        <P>You may use the Site for lawful purposes only. You agree NOT to:</P>
        <Bullets>
          <Bullet>
            Use the Site in any way that violates applicable laws or
            regulations;
          </Bullet>
          <Bullet>
            Attempt to gain unauthorized access to the Site, its servers, or any
            connected systems;
          </Bullet>
          <Bullet>
            Use automated tools (bots, scrapers, crawlers) to extract content or
            data from the Site without our prior written consent;
          </Bullet>
          <Bullet>
            Interfere with or disrupt the operation or security of the Site;
          </Bullet>
          <Bullet>
            Submit false, misleading, or fraudulent information through our
            forms;
          </Bullet>
          <Bullet>
            Impersonate any person or entity, or misrepresent your affiliation
            with any person or entity;
          </Bullet>
          <Bullet>
            Upload or transmit viruses, malware, or other harmful code; or
          </Bullet>
          <Bullet>Use the Site to harass, abuse, defame, or harm others.</Bullet>
        </Bullets>
        <P>
          We reserve the right to restrict, suspend, or terminate your access to
          the Site at our discretion if we believe you have violated these
          Terms.
        </P>
      </Section>

      <Section n="4." title="Newsletter, Email Marketing & Communications">
        <SubHeading>4.1 Subscription and Consent</SubHeading>
        <P>
          By subscribing to our newsletter (&ldquo;The EBP Dispatch&rdquo;) or
          otherwise providing your email address through the Site, you consent
          to receive periodic emails from us, including newsletters, promotional
          content, marketing communications, announcements about our productions
          and services, and information about partner offerings we believe may
          interest you.
        </P>

        <SubHeading>4.2 Third-Party Marketing Sharing</SubHeading>
        <P>
          <B>
            By subscribing or providing your contact information, you
            acknowledge and agree that we may share your contact information
            (such as your name and email address) with selected third-party
            partners for marketing purposes,
          </B>{" "}
          including partner promotions, co-marketing campaigns, and offers from
          brands, distributors, platforms, and collaborators we work with.
          Details of how we share data, the categories of recipients, and your
          rights regarding such sharing are set out in our{" "}
          <Link
            href="/privacy-policy"
            className="text-brand hover:text-brand-light transition"
          >
            Privacy Policy
          </Link>
          .
        </P>

        <SubHeading>4.3 Opting Out</SubHeading>
        <P>
          You may unsubscribe from our marketing emails at any time by clicking
          the &ldquo;unsubscribe&rdquo; link included in every email or by
          contacting us at{" "}
          <Mail address="contact@eshabargateproductions.com" />. You may also opt
          out of the sharing of your personal information with third parties for
          marketing purposes at any time — see the &ldquo;Your Privacy
          Rights&rdquo; and &ldquo;Do Not Sell or Share My Personal
          Information&rdquo; provisions of our Privacy Policy. We will honor
          opt-out requests promptly and, in any case, within the timeframes
          required by applicable law (including within 10 business days under the
          US CAN-SPAM Act).
        </P>

        <SubHeading>4.4 Accuracy of Information</SubHeading>
        <P>
          You agree to provide accurate, current contact information and to
          update it as needed. You may not subscribe another person&apos;s email
          address without their consent.
        </P>
      </Section>

      <Section n="5." title="Submissions (Contact Forms, Career Materials, Inquiries)">
        <P>
          When you submit information through our contact form, career
          submissions (reels, résumés), or investor/partnership inquiries:
        </P>
        <Bullets>
          <Bullet>
            You represent that the information and materials you submit are
            accurate and that you have the right to share them;
          </Bullet>
          <Bullet>
            You grant us a non-exclusive, royalty-free license to use,
            reproduce, and review the submitted materials for the purpose of
            evaluating and responding to your inquiry;
          </Bullet>
          <Bullet>
            Career and talent submissions are reviewed at our discretion.
            Submission does not create any obligation on our part to respond,
            engage, hire, or enter into any agreement; and
          </Bullet>
          <Bullet>
            You should not submit confidential or proprietary creative material
            that you do not wish us to review. We receive many ideas and
            submissions, and any similarity between submitted material and our
            current or future productions is coincidental. We are not
            responsible for unsolicited submissions.
          </Bullet>
        </Bullets>
      </Section>

      <Section n="6." title="Intellectual Property">
        <SubHeading>6.1 Our Content</SubHeading>
        <P>
          All content on the Site — including text, graphics, logos, images,
          videos, trailers, production stills, audio, design elements, and
          software — is owned by or licensed to Esha Bargate Productions and is
          protected by copyright, trademark, and other intellectual property
          laws.
        </P>

        <SubHeading>6.2 Limited License</SubHeading>
        <P>
          We grant you a limited, non-exclusive, non-transferable, revocable
          license to access and view the Site and its content for personal,
          non-commercial purposes. You may not copy, reproduce, distribute,
          modify, publicly display, create derivative works from, or
          commercially exploit any Site content without our prior written
          permission.
        </P>

        <SubHeading>6.3 Trademarks</SubHeading>
        <P>
          &ldquo;Esha Bargate Productions,&rdquo; &ldquo;EBP,&rdquo; and related
          names, logos, and slogans are trademarks of Esha Bargate Productions,
          LLC. Nothing in these Terms grants you any right to use our
          trademarks.
        </P>
      </Section>

      <Section n="7." title="Third-Party Links and Services">
        <P>
          The Site contains links to third-party websites, platforms, and
          services (including Apple TV, Google TV, IMDb, WhatsApp, social media
          platforms, and scheduling tools). These links are provided for
          convenience only. We do not control and are not responsible for the
          content, terms, or privacy practices of third-party sites. Your use of
          third-party services is at your own risk and subject to their own
          terms and policies.
        </P>
      </Section>

      <Section n="8." title="Disclaimers">
        <Legalese>
          THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
          AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
          NON-INFRINGEMENT.
        </Legalese>
        <P>
          We do not warrant that the Site will be uninterrupted, error-free,
          secure, or free of viruses or other harmful components, or that any
          information on the Site is accurate, complete, or current. Information
          about productions, projects, release dates, and partnerships may
          change without notice.
        </P>
        <P>
          Some jurisdictions do not allow the exclusion of certain warranties,
          so some of the above exclusions may not apply to you.
        </P>
      </Section>

      <Section n="9." title="Limitation of Liability">
        <Legalese>
          TO THE FULLEST EXTENT PERMITTED BY LAW, ESHA BARGATE PRODUCTIONS, ITS
          OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND PARTNERS SHALL NOT BE
          LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
          PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR OTHER
          INTANGIBLE LOSSES — ARISING OUT OF OR RELATED TO YOUR USE OF (OR
          INABILITY TO USE) THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE
          POSSIBILITY OF SUCH DAMAGES.
        </Legalese>
        <Legalese>
          TO THE FULLEST EXTENT PERMITTED BY LAW, OUR TOTAL AGGREGATE LIABILITY
          FOR ANY CLAIMS ARISING OUT OF OR RELATING TO THE SITE OR THESE TERMS
          SHALL NOT EXCEED ONE HUNDRED U.S. DOLLARS (USD $100).
        </Legalese>
        <P>
          Some jurisdictions do not allow the limitation of liability for
          certain damages, so some of the above limitations may not apply to
          you.
        </P>
      </Section>

      <Section n="10." title="Indemnification">
        <P>
          You agree to indemnify, defend, and hold harmless Esha Bargate
          Productions and its officers, directors, employees, and agents from
          and against any claims, liabilities, damages, losses, and expenses
          (including reasonable attorneys&apos; fees) arising out of or related
          to: (a) your use of the Site; (b) your violation of these Terms; (c)
          your violation of any applicable law or the rights of any third party;
          or (d) any materials or information you submit through the Site.
        </P>
      </Section>

      <Section n="11." title="Privacy">
        <P>
          Your use of the Site is also governed by our{" "}
          <Link
            href="/privacy-policy"
            className="text-brand hover:text-brand-light transition"
          >
            Privacy Policy
          </Link>
          , which describes how we collect, use, share (including sharing with
          third parties for marketing purposes), and protect your personal
          information, as well as your privacy rights and how to exercise them —
          including your right to opt out of marketing and of the sharing of
          your personal information. Please review it carefully.
        </P>
      </Section>

      <Section n="12." title="Changes to the Site and These Terms">
        <P>
          We may modify, suspend, or discontinue any part of the Site at any
          time without notice. We may also revise these Terms from time to time.
          The updated Terms will be posted on this page with a revised
          &ldquo;Last Updated&rdquo; date. Your continued use of the Site after
          changes are posted constitutes acceptance of the revised Terms.
          Material changes affecting your rights will be communicated where
          required by law.
        </P>
      </Section>

      <Section n="13." title="Governing Law and Dispute Resolution">
        <P>
          These Terms are governed by the laws of the State of California,
          United States, without regard to its conflict-of-law principles. Any
          dispute arising out of or relating to these Terms or the Site shall be
          resolved in the state or federal courts located in San Francisco
          County, California, and you consent to the personal jurisdiction of
          those courts. Nothing in this section limits any mandatory consumer
          protection rights you may have under the laws of your country of
          residence.
        </P>
      </Section>

      <Section n="14." title="Severability and Waiver">
        <P>
          If any provision of these Terms is found unenforceable, the remaining
          provisions will remain in full force and effect. Our failure to
          enforce any right or provision of these Terms is not a waiver of that
          right or provision.
        </P>
      </Section>

      <Section n="15." title="Entire Agreement">
        <P>
          These Terms, together with our Privacy Policy, constitute the entire
          agreement between you and Esha Bargate Productions regarding your use
          of the Site and supersede any prior agreements or understandings.
        </P>
      </Section>

      <Section n="16." title="Contact Us">
        <P>If you have any questions about these Terms, please contact us:</P>
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
