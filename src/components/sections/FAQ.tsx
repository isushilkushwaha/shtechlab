"use client";

import { faqData } from "@/content/faq/faqData";
import FAQSchema from "@/components/seo/FAQSchema";

export default function FAQ() {
  return (
    <>
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold mb-2">
              Frequently Asked Questions
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Everything You Need To Know
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {faq.question}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Schema */}
      <FAQSchema faqs={faqData} />
    </>
  );
}