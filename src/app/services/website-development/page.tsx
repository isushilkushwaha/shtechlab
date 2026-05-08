import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Website Development | SH Tech Lab",
  description:
    "Professional website development services using Next.js and React.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-black text-white">

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">

          <h1 className="text-5xl font-bold mb-6">
            Website Development
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            SH Tech Lab creates fast, responsive and SEO-friendly websites
            for startups, local businesses and companies.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950">
              Modern UI Design
            </div>

            <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950">
              SEO Optimized
            </div>

            <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950">
              Mobile Responsive
            </div>

          </div>

        </div>
      </section>

      <CTA />
    </main>
  );
}