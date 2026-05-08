import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SH Tech Lab",
  description:
    "Read the Privacy Policy of SH Tech Lab regarding data collection, cookies, contact forms, and user privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-zinc-400 mb-6">
          Last Updated: May 2026
        </p>

        <div className="space-y-8 text-zinc-300 leading-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p>
              SH Tech Lab may collect your name, email address, phone number,
              and project details when you submit a contact form or communicate
              with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use your information to respond to inquiries, provide IT
              services, improve our website experience, and communicate with
              clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Cookies
            </h2>
            <p>
              Our website may use cookies and analytics tools to improve user
              experience and monitor website performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Protection
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Third-Party Services
            </h2>
            <p>
              We may use third-party tools such as Google Analytics, Firebase,
              or hosting providers to operate our services efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, you can
              contact us at:
            </p>

            <p className="mt-3">
              Email: shtechlab.in@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}