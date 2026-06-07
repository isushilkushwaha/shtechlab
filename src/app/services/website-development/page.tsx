import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Website Development | SH Tech Lab",
  description:
    "Professional website development services using Next.js and React.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-[#0B1F1A] text-white">

      <section className="py-12 border-b border-zinc-900 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">

          <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
            Website Development
          </span>

          <h1 className="mb-6 text-4xl md:text-6xl font-bold">
            Build Modern Websites
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
           We create professional websites that help businesses build trust,
           attract customers, showcase services, and grow online. Whether
          you're a startup, local business, school, clinic, consultant, or
         growing company, we build websites designed around your goals.
         </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="rounded-xl border border-zinc-800 p-6">
              Modern UI Design
            </div>

            <div className="rounded-xl border border-zinc-800 p-6">
              SEO Optimized
            </div>

            <div className="rounded-xl border border-zinc-800 p-6">
              Mobile Responsive
            </div>

          </div>

        </div>
      </section>

      <section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-6">
      Why Every Business Needs a Website
    </h2>

    <p className="text-zinc-400 leading-8">
      Today, most customers search online before contacting a business.
      A professional website acts as your digital office and is available
      to customers 24 hours a day.
    </p>

    <p className="mt-4 text-zinc-400 leading-8">
      A website helps customers learn about your services, contact your
      business, build trust in your brand, and make informed decisions.
      Without a website, many potential customers may choose your competitors.
    </p>

  </div>
</section>

<section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      Types of Websites We Build
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="rounded-3xl border border-zinc-800 p-8">
        <h3 className="text-xl font-semibold mb-4">
          Business Websites
        </h3>

        <p className="text-zinc-400">
          Perfect for companies, startups, consultants, and service
          providers who want to establish a professional online presence.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 p-8">
        <h3 className="text-xl font-semibold mb-4">
          School & Educational Websites
        </h3>

        <p className="text-zinc-400">
          Help parents and students access important information,
          admissions details, notices, and school updates.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 p-8">
        <h3 className="text-xl font-semibold mb-4">
          Portfolio Websites
        </h3>

        <p className="text-zinc-400">
          Showcase your work, achievements, skills, and experience in a
          professional and attractive way.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 p-8">
        <h3 className="text-xl font-semibold mb-4">
          Service Websites
        </h3>

        <p className="text-zinc-400">
          Ideal for clinics, agencies, coaches, real estate businesses,
          and local service providers.
        </p>
      </div>

    </div>

  </div>
</section>

<section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-6">
      Benefits of a Professional Website
    </h2>

    <ul className="space-y-4 text-zinc-300">
      <li>✓ Build trust and credibility</li>
      <li>✓ Reach more customers online</li>
      <li>✓ Showcase products and services</li>
      <li>✓ Generate more inquiries and leads</li>
      <li>✓ Improve customer communication</li>
      <li>✓ Support business growth</li>
      <li>✓ Stay available 24/7</li>
    </ul>

  </div>
</section>

<section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      Who Can Benefit From a Website?
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-2xl border border-zinc-800 p-6">
        Small Businesses
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Startups
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Schools & Colleges
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Clinics & Hospitals
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Real Estate Businesses
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Consultants & Coaches
      </div>

    </div>

  </div>
</section>

<section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      How We Build Your Website
    </h2>

    <div className="grid md:grid-cols-5 gap-6">

      <div className="rounded-xl border border-zinc-800 p-6">
        1. Understanding Your Business
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        2. Planning the Website
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        3. Designing the Pages
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        4. Review & Improvements
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        5. Launch & Support
      </div>

    </div>

  </div>
</section>

      <CTA />
    </main>
  );
}