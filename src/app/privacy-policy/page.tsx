import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SH Tech Lab",
  description:
    "Read the Privacy Policy of SH Tech Lab regarding data collection, cookies, contact forms, and user privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50/50 text-slate-800 min-h-screen py-10 md:py-20 antialiased">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-6 mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Last Updated: May 2026
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 md:space-y-12 text-base md:text-lg leading-relaxed text-slate-600">
          
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
              Information We Collect
            </h2>
            <p>
              SH Tech Lab may collect your name, email address, phone number,
              and project details when you submit a contact form or communicate
              with us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
              How We Use Your Information
            </h2>
            <p>
              We use your information to respond to inquiries, provide IT
              services, improve our website experience, and communicate with
              clients.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
              Cookies
            </h2>
            <p>
              Our website may use cookies and analytics tools to improve user
              experience and monitor website performance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
              Data Protection
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information from unauthorized access or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
              Third-Party Services
            </h2>
            <p>
              We may use third-party tools such as Google Analytics, Firebase,
              or hosting providers to operate our services efficiently.
            </p>
          </section>

          {/* Contact Section Box */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mt-12 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-3">
              Contact Us
            </h2>
            <p className="mb-4 text-slate-600">
              If you have any questions regarding this Privacy Policy, please don't hesitate to contact us at:
            </p>
            <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-100 text-sm md:text-base font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
              <span className="text-slate-400 font-normal">Email:</span>
              <a href="mailto:shtechlab.in@gmail.com" className="hover:underline">
                shtechlab.in@gmail.com
              </a>
            </div>
          </section>
          
        </div>
      </div>
    </main>
  );
}