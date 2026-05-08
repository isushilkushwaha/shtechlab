import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Website Maintenance | SH Tech Lab",
  description:
    "Keep your website secure, updated and optimized with our maintenance services.",
};

export default function WebsiteMaintenancePage() {
  return (
    <main className="bg-black text-white">

      <section className="relative overflow-hidden py-24">

        {/* Gradient */}
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">

          <span className="mb-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
            Website Maintenance
          </span>

          <h1 className="mb-6 text-4xl md:text-6xl font-bold">
            Keep Your Website Secure & Updated
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            SH Tech Lab provides ongoing website maintenance, security,
            updates and performance optimization for businesses.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              Security Updates
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              Performance Optimization
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              Regular Backups
            </div>

          </div>

        </div>
      </section>

      <CTA />

    </main>
  );
}