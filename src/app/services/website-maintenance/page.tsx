import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Website Maintenance | SH Tech Lab",
  description:
    "Keep your website secure, updated and optimized with our maintenance services.",
};

export default function WebsiteMaintenancePage() {
  return (
    <main className="bg-[#0B1F1A] text-white">

      <section className="py-12 border-b border-zinc-900 relative overflow-hidden">

        {/* Gradient */}
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">

          <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
            Website Maintenance
          </span>

          <h1 className="mb-6 text-4xl md:text-6xl font-bold">
            Keep Your Website Secure & Updated
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
         A website is not something you build once and forget. Regular
        maintenance helps keep your website running smoothly, keeps
       information up to date, and ensures visitors always have a
      positive experience when interacting with your business online.
      </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-zinc-800 p-6">
              Security Updates
            </div>

            <div className="rounded-xl border border-zinc-800 p-6">
              Performance Optimization
            </div>

            <div className="rounded-xl border border-zinc-800 p-6">
              Regular Backups
            </div>

          </div>

        </div>
      </section>

      <section className="py-12 border-t border-emerald-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-6">
      Why Website Maintenance Is Important
    </h2>

    <p className="text-zinc-400 leading-8">
      Your website represents your business every day. If information
      becomes outdated, pages stop working, or customers encounter
      problems, it can affect trust and business opportunities.
    </p>

    <p className="mt-4 text-zinc-400 leading-8">
      Regular maintenance helps ensure your website remains accurate,
      reliable, and ready to support your business growth.
    </p>

  </div>
</section>

<section className="py-12 border-t border-emerald-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      Problems Caused by Poor Maintenance
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="rounded-2xl border border-zinc-800 p-6">
        Outdated business information
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Broken contact forms
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Missing business opportunities
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Poor customer experience
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Reduced customer trust
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Website downtime or issues
      </div>

    </div>

  </div>
</section>

<section className="py-12 border-t border-emerald-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      What We Take Care Of
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-2xl border border-zinc-800 p-6">
        Content Updates
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Website Monitoring
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Regular Website Checks
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Business Information Updates
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Contact Form Testing
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Ongoing Support
      </div>

    </div>

  </div>
</section>

<section className="py-12 border-t border-emerald-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      Who Can Benefit From Website Maintenance?
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
        Service Providers
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Growing Companies
      </div>

    </div>

  </div>
</section>

<section className="py-12 border-t border-emerald-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      How Our Maintenance Service Works
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="rounded-xl border border-zinc-800 p-6">
        1. Review Your Website
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        2. Identify Improvements
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        3. Perform Regular Updates
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        4. Provide Ongoing Support
      </div>

    </div>

  </div>
</section>


      <CTA />

    </main>
  );
}