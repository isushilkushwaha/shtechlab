import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | SH Tech Lab",
  description:
    "Get a professional business website in just 5 days. Affordable and high-quality development.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CTA />
    </>
  );
}