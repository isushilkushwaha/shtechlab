import {  Sparkles } from "lucide-react";
import Link from "next/dist/client/link";

export const metadata = {
  title: "Website Redesign | SH Tech Lab",
  description:
    "Upgrade your old website into a modern responsive business website.",
};

export default function WebsiteRedesignPage() {
  return (
    <main className="bg-[#0B1F1A] text-white">

      <section className=" py-12 border-b border-zinc-900 relative overflow-hidden">

        {/* Gradient */}
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">

          <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
            Website Development
          </span>

          <h1 className="mb-6 text-4xl md:text-6xl font-bold">
            Transform Your Old Website
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
          If your website looks outdated, is difficult to use, or no longer
          represents your business properly, we can help. SH Tech Lab redesigns
          websites to create a more professional image, improve customer
           experience, and support business growth.
           </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-zinc-800 p-6">
              Modern UI/UX
            </div>

            <div className="rounded-xl border border-zinc-800 p-6">
              Mobile Responsive
            </div>

            <div className="rounded-xl border border-zinc-800 p-6">
              Better Performance
            </div>

          </div>

        </div>
      </section>
      <section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-8">
      Signs Your Website Needs a Redesign
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="rounded-2xl border border-zinc-800 p-6">
        Your website looks outdated
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Customers struggle to find information
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Your business has changed over time
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        You are receiving fewer inquiries than expected
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Your competitors have better websites
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        The website no longer reflects your brand
      </div>

    </div>

  </div>
</section>
<section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-6">
      Benefits of a Website Redesign
    </h2>

    <p className="text-zinc-400 leading-8">
      A redesigned website can make a significant difference in how
      customers view your business. A modern website builds trust,
      improves communication, and encourages more people to contact you.
    </p>

    <ul className="mt-8 space-y-4 text-zinc-300">
      <li>✓ More professional appearance</li>
      <li>✓ Better customer experience</li>
      <li>✓ Clearer presentation of services</li>
      <li>✓ Increased customer trust</li>
      <li>✓ More inquiries and leads</li>
      <li>✓ Stronger online presence</li>
    </ul>

  </div>
</section>

<section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      What We Improve
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-2xl border border-zinc-800 p-6">
        Website Appearance
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Navigation & Structure
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Content Organization
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Mobile Experience
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Contact & Inquiry Flow
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Overall User Experience
      </div>

    </div>

  </div>
</section>

<section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      How We Redesign Your Website
    </h2>

    <div className="grid md:grid-cols-5 gap-6">

      <div className="rounded-xl border border-zinc-800 p-6">
        1. Review Current Website
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        2. Understand Business Goals
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        3. Create New Design
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        4. Review & Improvements
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        5. Launch Updated Website
      </div>

    </div>

  </div>
</section>

<section className="py-12 border-t border-green-950">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-10">
      Who Can Benefit From Website Redesign?
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
        Consultants & Agencies
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        Growing Companies
      </div>

    </div>

  </div>
</section>



      <div className="w-full flex justify-center items-center mt-8 px-8">
  <Link
    href="/start-project"
    className="flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 h-12 text-sm font-semibold text-neutral-800 transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98] w-full max-w-[280px] sm:w-fit text-center dark:bg-neutral-950 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900 dark:hover:border-neutral-700 select-none"
  >
    <Sparkles className="mr-2 h-4 w-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
    <span>Start Your Project</span>
  </Link>
</div>

    </main>
  );
}