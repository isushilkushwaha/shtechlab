"use client";

import { services } from "@/lib/services";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";

const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-black">

      {/* Animated Gradient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">

        <SectionHeading
          title="Our Services"
          subtitle="Professional IT solutions for modern businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
              slug={service.slug}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;