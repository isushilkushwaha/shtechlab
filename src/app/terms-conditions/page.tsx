import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SH Tech Lab",
  description:
    "Read the Terms & Conditions of SH Tech Lab for using our website and services.",
};

export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">
          Terms & Conditions
        </h1>

        <p className="text-zinc-400 mb-6">
          Last Updated: May 2026
        </p>

        <div className="space-y-8 text-zinc-300 leading-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using SH Tech Lab website and services, you agree
              to comply with these Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Services
            </h2>
            <p>
              SH Tech Lab provides website development, app development,
              redesign, maintenance, and digital IT solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Payments
            </h2>
            <p>
              Project pricing, timelines, and payment terms will be discussed
              and agreed upon before project initiation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Intellectual Property
            </h2>
            <p>
              All website content, branding, and materials belong to SH Tech
              Lab unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Limitation of Liability
            </h2>
            <p>
              SH Tech Lab is not liable for any indirect or consequential
              damages arising from the use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms & Conditions at any time without prior
              notice.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}