import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Website Redesign | SH Tech Lab",
  description:
    "Upgrade your old website into a modern responsive business website.",
};

export default function WebsiteRedesignPage() {
  return (
    <main className="bg-black text-white">

      <section className="relative overflow-hidden py-24">

        {/* Gradient */}
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">

          <span className="mb-4 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1 text-sm text-purple-400">
            Website Redesign
          </span>

          <h1 className="mb-6 text-4xl md:text-6xl font-bold">
            Transform Your Old Website
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            We redesign outdated websites into modern, responsive and
            SEO-friendly business websites with improved UI/UX.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              Modern UI/UX
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              Mobile Responsive
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              Better Performance
            </div>

          </div>

        </div>
      </section>

      <CTA />

    </main>
  );
}