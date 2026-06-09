
import { Playfair_Display } from "next/font/google";
import Container from "@/components/layout/Container";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-5 bg-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-200/20 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-8">
            {/* Heading */}
            <div className="mb-8">
              <h2
                className={`${playfair.className} relative text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight`}
              >
                <div className="relative inline-block">
                  {/* Golden Circle Behind Text */}
                  <div className="absolute left-1/2 top-1/2 -z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/40 blur-3xl md:h-36 md:w-36" />

                  <span className="block text-slate-900">
                    Why Choose Us
                  </span>

                  

                  {/* Brush Underline */}
                  <div className="absolute -bottom-3 left-0 w-full">
                    <svg
                      viewBox="0 0 160 16"
                      preserveAspectRatio="none"
                      className="h-3 w-full text-[#14b193]"
                    >
                      <path
                        d="M 4 13 C 35 4, 110 3, 156 12 C 110 5, 35 6, 4 13 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </h2>
            </div>

            {/* Content */}
            <p className="max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              At <strong className="text-slate-900">SH Tech Lab</strong>, we
              help businesses build a strong online presence with professional,
              affordable, and easy-to-manage websites. We believe technology
              should be simple and useful, which is why we focus on clear
              communication, practical solutions, and long-term support. Whether
              you're a startup, small business, school, or organization, our
              goal is to create a website that builds trust, attracts customers,
              and supports your growth. We work closely with every client to
              deliver quality results and a smooth experience from start to
              finish.
            </p>

            {/* Points */}
            <div className="mt-8 space-y-3.5">
                {[
                  "Transparent Communication",
                  "Affordable & Honest Pricing",
                  "On-Time Project Delivery",
                  "Business-Focused Solutions",
                  "Ongoing Support After Launch"
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

          {/* Right Side Visual */}
          {/* Right Side Abstract Golden Circle Element */}
            <div className="relative hidden justify-end pt-12 lg:col-span-4 lg:flex">
              <div className="relative -translate-x-4 h-44 w-44 rounded-full border-[14px] border-[#FBBF24] opacity-90" />
            </div>
        </div>
      </Container>
    </section>
  );
}