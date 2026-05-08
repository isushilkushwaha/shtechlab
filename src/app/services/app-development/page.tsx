import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "App Development | SH Tech Lab",
  description:
    "Professional app development services for Android and web applications.",
};

export default function AppDevelopmentPage() {
  return (
    <main className="bg-black text-white">

      <section className="relative overflow-hidden py-24">

        {/* Gradient */}
        <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">

          <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
            App Development
          </span>

          <h1 className="mb-6 text-4xl md:text-6xl font-bold">
            Build Modern Mobile & Web Applications
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            SH Tech Lab develops scalable Android and web applications
            with modern UI, fast performance and user-friendly experience.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              Android Apps
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              Web Applications
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              API Integration
            </div>

          </div>

        </div>
      </section>

      <CTA />

    </main>
  );
}