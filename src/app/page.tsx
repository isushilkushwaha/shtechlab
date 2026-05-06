
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Technologies from "@/components/sections/Technologies";
//import Testimonials from "@/components/sections/Testimonials";
//import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
//import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Home | SH Tech Lab",
  description:
    "Get a professional business website in just 5 days. Affordable and high-quality development.",
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      
      
      <Hero />
       <Services />
     
      <WhyChooseUs />
      <Technologies />
      <CTA />
        {/*
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactSection /> */}

    </main>
  );
}