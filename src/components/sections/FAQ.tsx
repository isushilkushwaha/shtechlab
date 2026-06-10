// "use client";

// import { faqData } from "@/content/faq/faqData";
// import FAQSchema from "@/components/seo/FAQSchema";

// export default function FAQ() {
//   return (
//     <>
//       <section className="py-20 bg-black text-white">
//         <div className="max-w-4xl mx-auto px-4">
//           {/* Heading */}
//           <div className="text-center mb-12">
//             <p className="text-blue-400 font-semibold mb-2">
//               Frequently Asked Questions
//             </p>

//             <h2 className="text-4xl md:text-5xl font-bold">
//               Everything You Need To Know
//             </h2>
//           </div>

//           {/* FAQ Items */}
//           <div className="space-y-6">
//             {faqData.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300"
//               >
//                 <h3 className="text-xl font-semibold mb-3">
//                   {faq.question}
//                 </h3>

//                 <p className="text-zinc-400 leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SEO Schema */}
//       <FAQSchema faqs={faqData} />
//     </>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { faqData } from "@/content/faq/faqData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  SearchIcon,
  SearchSlashIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "services", label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "process", label: "Process" },
    { id: "support", label: "Support" },
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" ||
      faq.category === activeCategory;

    const matchesSearch =
      faq.question
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      faq.answer
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="mb-10 text-center">
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto max-w-2xl text-muted-foreground">
              Find answers to common questions about website development,
              redesign, SEO, maintenance, and digital solutions offered by
              SH Tech Lab.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative mx-auto max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search FAQs..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all",
                  activeCategory === category.id
                    ? "border-primary bg-primary text-white"
                    : "border-border hover:bg-muted"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          {filteredFaqs.length > 0 ? (
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-xl border px-5 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="py-16 text-center">
              <SearchIcon className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

              <h3 className="mb-2 text-lg font-semibold">
                No FAQs Found
              </h3>

              <p className="mb-6 text-muted-foreground">
                No FAQs found matching your search.
              </p>

              <Button
                variant="outline"
                onClick={() => setSearchTerm("")}
              >
                <SearchSlashIcon className="mr-2 h-4 w-4" />
                Clear Search
              </Button>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Can't find what you're looking for?{" "}
              <Link
                href="/contact"
                className="font-medium text-primary hover:underline"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}