

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import { playfair } from "@/lib/fonts";



export default function ServicesShowcase() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-12">

          {/* Header */}
          <div className="max-w-3xl">
            
            <h2
  className={`${playfair.className} text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl`}
>
  Building Your <br />
  <span className="text-blue-600">Digital Tomorrow</span>
</h2>

            

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Your website is often the first impression of your business. We help you
               create a powerful online presence that builds credibility, generates leads,
                and turns visitors into customers.
            </p>
          </div>

          {/* Services Layout */}
          <div className="grid items-start gap-10 lg:grid-cols-12">

            {/* Image */}
            <div className="order-1 lg:order-1 lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md">

                <div className="absolute -left-4 bottom-4 -z-10 h-[85%] w-[90%] rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-cyan-100 opacity-80" />

                <Image
                  src="/images/services-presenter.png"
                  alt="SH Tech Lab Website Development Services"
                  width={700}
                  height={700}
                  priority
                  className="relative z-10 h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Services */}
            <div className="order-2 lg:order-2 lg:col-span-7">

              {services.map((service) => (
                <div
                  key={service.slug}
                  className="border-t border-slate-200 py-8"
                >
                  <div className="flex flex-col gap-4">

                    <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="max-w-2xl leading-relaxed text-slate-600">
                      {service.longDescription}
                    </p>

                    <div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
                      >
                        Learn More
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="mt-10 flex justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-blue-600 px-6 hover:bg-blue-700"
                >
                  <Link href="/contact">
                    Book a Free Consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}