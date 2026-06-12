import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SH Tech Lab",
  description:
    "Read the Terms & Conditions of SH Tech Lab for using our website and services.",
};

export default function TermsPage() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="border-l-4 border-blue-600 pl-4 mb-10">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="text-sm text-zinc-500">
            Last Updated: May 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-slate-700 leading-relaxed bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using SH Tech Lab website and services, you agree
              to comply with these Terms & Conditions.
            </p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Services
            </h2>
            <p>
              SH Tech Lab provides website development, app development,
              redesign, maintenance, and digital IT solutions.
            </p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Payments
            </h2>
            <p>
              Project pricing, timelines, and payment terms will be discussed
              and agreed upon before project initiation.
            </p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Intellectual Property
            </h2>
            <p>
              All website content, branding, and materials belong to SH Tech
              Lab unless otherwise stated.
            </p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Limitation of Liability
            </h2>
            <p>
              SH Tech Lab is not liable for any indirect or consequential
              damages arising from the use of our services or website.
            </p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
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