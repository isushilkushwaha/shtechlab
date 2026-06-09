

import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About SH Tech Lab | Website Development & Digital Solutions",
  description:
    "SH Tech Lab helps businesses build a strong online presence through professional website development, SEO, and digital solutions. Learn more about our mission, services, and technology stack.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-[#111111] antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            
            {/* Content Left Column */}
            <div className="flex max-w-2xl flex-col items-start lg:col-span-8">
              
              {/* Category Subtitle Badge */}
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                ABOUT US
              </p>

              {/* Redesigned Main Title to fit layout screenshot exactly */}
              <h1 className="mb-8 text-3xl font-extrabold leading-[1.2] tracking-tight text-black sm:text-4xl md:text-[2.75rem]">
  Let's Build Your <br className="hidden sm:inline" />
  Digital{" "}
  <div className="relative inline-block mt-2 sm:mt-0">
    <span className="inline-block rounded-[3px] bg-[#EAEAEA] text-blue-600 px-3 py-0.5 font-extrabold tracking-tight">
      Tomorrow
    </span>

    <div className="absolute -bottom-3 left-0 w-full px-1">
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="h-1.5 w-full text-blue-500 fill-current opacity-80"
      >
        <path
          d="M0,5 Q25,0 50,5 T100,5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
</h1>

              {/* Description Paragraph Blocks */}
              <div className="space-y-6 text-sm font-normal leading-relaxed text-gray-600 md:text-base">
                <p>
                  At{" "}
                  <strong className="font-semibold text-black">
                    SH Tech Lab
                  </strong>
                  , we help businesses establish a strong online presence
                  through modern website development, SEO, and digital
                  solutions. Our mission is to create fast, professional,
                  and user-friendly websites that help businesses attract
                  customers, build credibility, and grow online.
                </p>

                <p>
                  Whether you're a startup, school, clinic, local business,
                  or growing company, we work closely with you to understand
                  your goals and deliver digital solutions tailored to your
                  needs. From business websites and web applications to SEO
                  services, we focus on creating results-driven solutions
                  that support long-term growth.
                </p>
              </div>

              {/* Styled Feature Check List with Golden Checkmarks */}
              <div className="mt-8 space-y-3.5">
                {[
                  "Custom Website Development",
                  "SEO-Friendly Solutions",
                  "Mobile Responsive Design",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-black md:text-base"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-[#F59E0B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            
            
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}