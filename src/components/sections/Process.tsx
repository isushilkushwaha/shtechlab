

import React from "react";
import Image from "next/image";
import { CornerDownRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface Process1Props {
  className?: string;
}

const Process1 = ({ className }: Process1Props) => {
  const process = [
    {
      step: "01",
      title: "Discuss Your Requirements",
      description:
        "We start by understanding your business, goals, and website requirements. This helps us create the right solution for your needs.",
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description:
        "We create a clear project plan, structure, and timeline to ensure a smooth development process from start to finish.",
    },
    {
      step: "03",
      title: "Design & Development",
      description:
        "Our team designs and develops a professional, mobile-friendly website that reflects your brand and business goals.",
    },
    {
      step: "04",
      title: "Review & Launch",
      description:
        "After testing and your final approval, we launch the website and ensure everything runs smoothly.",
    },
    {
      step: "05",
      title: "Ongoing Support",
      description:
        "We provide maintenance, updates, and support to help your website continue performing at its best.",
    },
  ];

  return (
    <section className={cn("py-5 md:py-16 lg:py-5", className)}>
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Left Side */}
          <div className="top-10 h-fit space-y-7 lg:sticky lg:col-span-4">
            {/* Heading */}
            <div className="relative mb-8 flex flex-col items-center text-center lg:items-start lg:text-left">
  {/* Abstract Layered Ambient Background Effect */}
  <div className="absolute -top-4 -z-10 h-16 w-36 rounded-full bg-gradient-to-r from-emerald-200/30 to-amber-200/20 blur-xl" />

  <h2 className={`${playfair.className} text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-none`}>
    How We Work
  </h2>
  
  <p className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-400">
    Step-by-Step Delivery
  </p>
</div>

            {/* Description */}
            <p className="max-w-md text-base leading-relaxed text-foreground/60">
              We keep the website development process simple, transparent,
              and stress-free. From the first conversation to the final launch,
              we work closely with you every step of the way.
            </p>

            {/* Image */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl">
              <div className="absolute -left-4 bottom-4 -z-10 h-[85%] w-[90%] rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-cyan-100 opacity-80" />

              <Image
                src="/images/process-presenter.png"
                alt="SH Tech Lab Process"
                width={700}
                height={700}
                priority
                className="relative z-10 h-auto w-full object-cover"
              />
            </div>

            {/* Button */}
          </div>

          

          {/* Right Side */}
<ul className="relative flex gap-4 overflow-x-auto pb-4 no-scrollbar lg:col-span-8 lg:block lg:overflow-visible lg:pl-10">
  {process.map((step) => (
    <li
      key={step.step}
      className="
        relative
        flex-none
        w-[300px]
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm

        lg:w-auto
        lg:rounded-none
        lg:border-0
        lg:bg-transparent
        lg:p-0
        lg:shadow-none
        lg:flex
        lg:flex-col
        lg:gap-8
        lg:border-t
        lg:py-10
      "
    >
      <Illustration className="absolute right-4 top-4" />

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-muted text-sm font-semibold">
        {step.step}
      </div>

      <div className="mt-4 lg:mt-0 max-w-2xl">
        <h3 className="mb-3 text-2xl font-semibold tracking-tight lg:text-3xl">
          {step.title}
        </h3>

        <p className="leading-relaxed text-foreground/60">
          {step.description}
        </p>
      </div>
    </li>
  ))}
</ul>
     
     
        </div>
      </Container>
    </section>
  );
};

export { Process1 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#14b193"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#14b193"
        strokeWidth="4"
      />
    </svg>
  );
};