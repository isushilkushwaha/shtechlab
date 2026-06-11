


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { playfair, cormorant } from "@/lib/fonts";
import Image from "next/image"

export default function Hero() {
  // Array of words to rotate through in the heading
  const words = [
  "Business",
  "School",
  "Startup",
  "Clinic",
  "Company",
];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Switches the word every 2.5 seconds
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-5 md:py-16 lg:py-5">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Main Split Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Content Column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7 order-2 lg:order-1">
         

             <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
  <span className={`${playfair.className} font-bold text-slate-900`}>
    Grow Your{" "}
  </span>

  <span
    className={`${cormorant.className} inline-block min-w-[130px] text-blue-600 italic font-semibold`}
  >
    {words[currentWordIndex]}
  </span>

  <span
    className={`${playfair.className} mt-3 block font-bold text-slate-900`}
  >
    with a Professional Website
  </span>
</h1>

            {/* Description Paragraph */}
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
              In today's fast-moving digital landscape, staying ahead means embracing the right technology 
              and online strategies. SH Tech Lab is your trusted partner for website development, SEO, and digital 
              business solutions, helping you build a strong online presence, connect with more customers, and transform your 
              vision into long-term business success.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/ConsultationForm"
                className="flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-900 w-full sm:w-auto text-center"
              >
                Book a Free Consultation
                <ArrowUpRight className="ml-2 h-4 w-4 shrink-0" />
              </Link>

              
            </div>
          </div>
          

          {/* Right Layout Image Column */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end order-2 lg:order-2 px-4 sm:px-0">
          <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md">

    {/* Background Shape */}
           <div className="absolute -left-4 bottom-4 -z-10 h-[85%] w-[90%] rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-white to-cyan-100 opacity-80" />

    {/* Main Image */}
              <img
      src="/images/hero-presenter.png"
      alt="Professional Website Development"
      className="relative z-10 block h-auto w-full object-cover"
    />

          </div>
       </div> </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 gap-y-8 gap-x-4 rounded-2xl sm:rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 shadow-sm md:grid-cols-4">
          <div className="text-center border-r border-gray-200 last:border-0 md:border-r md:last:border-0 [&:nth-child(2)]:border-none md:[&:nth-child(2)]:border-r">
            <h3 className="text-2xl sm:text-3xl font-bold text-black">2+</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">Projects Delivered</p>
          </div>

          <div className="text-center md:border-r md:border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-black">1+</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">Countries Served</p>
          </div>

          <div className="text-center border-r border-gray-200 md:border-r">
            <h3 className="text-2xl sm:text-3xl font-bold text-black">98%</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">Client Satisfaction</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-black">24/7</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">Support</p>
          </div>
        </div>

      </div>
    </section>
  );
}