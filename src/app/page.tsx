
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Technologies from "@/components/sections/Technologies";
//import Testimonials from "@/components/sections/Testimonials";
//import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
//import ContactSection from "@/components/sections/ContactSection";
import { Process1 } from "@/components/sections/Process";
//import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "SH Tech Lab | Building Your Digital Tomorrow",
  description:
    "SH Tech Lab is your trusted partner for website development, SEO, and digital business solutions. We help you build a strong online presence and grow your business in the digital age.",
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      
      
      <Hero />
       <Services />
     
      <WhyChooseUs />
      <Process1 />
      
      <Technologies />
      <CTA />
        {/*
      <Testimonials />
    
      <CTA />
      <ContactSection /> */}

    </main>
  );
}