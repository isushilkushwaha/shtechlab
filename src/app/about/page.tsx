import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import CTA from "@/components/sections/CTA";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About SH Tech Lab | Website Development Company",
  description:
    "Learn more about SH Tech Lab — a modern web development company helping startups, businesses, and brands grow online with websites, apps, and digital solutions.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 border-b border-zinc-800">
        <Container>
          <div className="max-w-4xl">
            <p className="text-blue-500 font-semibold mb-4">
              About SH Tech Lab
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building Modern Digital Solutions For Growing Businesses
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed">
              SH Tech Lab is a modern web development and IT solutions company
              focused on creating high-performance websites, web applications,
              and digital experiences for startups, creators, and businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="How SH Tech Lab Started"
              />

              <p className="text-zinc-400 leading-8 mb-6">
                SH Tech Lab started with a simple mission — helping businesses
                build a strong online presence through modern technology and
                creative solutions.
              </p>

              <p className="text-zinc-400 leading-8">
                We focus on clean design, fast performance, SEO optimization,
                and scalable development using technologies like React,
                Next.js, Tailwind CSS, Firebase, and modern web tools.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-blue-500">10+</h3>
                  <p className="text-zinc-400 mt-2">Projects Completed</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-blue-500">24/7</h3>
                  <p className="text-zinc-400 mt-2">Support Available</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-blue-500">100%</h3>
                  <p className="text-zinc-400 mt-2">Modern Development</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-blue-500">SEO</h3>
                  <p className="text-zinc-400 mt-2">Optimized Websites</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-800">
        <Container>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>

              <p className="text-zinc-400 leading-8">
                To empower businesses with modern digital solutions that improve
                visibility, branding, customer engagement, and growth.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>

              <p className="text-zinc-400 leading-8">
                To become a trusted technology partner for startups and
                businesses worldwide by delivering innovative and scalable
                digital products.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Technologies We Use"
            subtitle="Modern Tech Stack"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Firebase",
              "Shadcn UI",
            ].map((tech) => (
              <div
                key={tech}
                className="border border-zinc-800 bg-zinc-900 rounded-2xl p-5 text-center"
              >
                {tech}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}