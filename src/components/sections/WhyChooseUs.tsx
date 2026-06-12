

import { Playfair_Display } from "next/font/google";
import Container from "@/components/layout/Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function WhyChooseUs() {
  const points = [
    { title: "Transparent", desc: "Communication" },
    { title: "Affordable", desc: "& Honest Pricing" },
    { title: "On-Time", desc: "Project Delivery" },
    { title: "Business-Focused", desc: "Digital Solutions" },
    { title: "Ongoing Support", desc: "After Launch" }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-12 md:py-20 lg:py-24">
      {/* Background Glows for Depth */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-amber-200/20 blur-[80px] md:h-96 md:w-96" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-emerald-200/20 blur-[80px] md:h-96 md:w-96" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          
          {/* Left Content Column */}
          <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
            {/* Subtle Modern Pill Badge */}
            <span className="mb-4 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase ring-1 ring-inset ring-emerald-600/10">
              Our Core Philosophy
            </span>

            {/* Heading */}
            <div className="relative mb-6">
              <h2 className={`${playfair.className} text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl`}>
                Why Choose Us
              </h2>
              {/* Modern Minimalistic Underline */}
              <div className="mt-2 h-1 w-16 rounded-full bg-emerald-500 mx-auto lg:mx-0" />
            </div>

            {/* Main Paragraph */}
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              At <strong className="font-semibold text-slate-900">SH Tech Lab</strong>, we help businesses build a strong online presence with professional, affordable, and easy-to-manage websites. 
              We strip away the complexity of technology, focusing on clear communication, practical solutions, and dedicated long-term growth support.
            </p>
          </div>

          {/* Right Visual Grid Column (Highly Optimized for Mobile Layouts) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-2">
              {points.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95 sm:p-5 ${
                    index === points.length - 1 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  {/* Icon Wrapper */}
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600 sm:h-10 sm:w-10">
                    <svg
                      className="h-5 w-5 stroke-[2.5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}