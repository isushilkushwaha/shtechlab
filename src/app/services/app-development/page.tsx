
import Link from "next/dist/client/link";
import {  Sparkles } from "lucide-react";

export const metadata = {
  title: "App Development | SH Tech Lab",
  description:
    "Professional app development services for Android and web applications.",
};

export default function AppDevelopmentPage() {
  return (
    <main className="bg-[#0B1F1A] text-white">

      <section className="relative overflow-hidden py-12 border-b border-zinc-900">

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

            <div className="rounded-xl border border-zinc-800 p-6">
              Android Apps
            </div>

            <div className="rounded-xl border border-zinc-800 p-6">
              Web Applications
            </div>

            <div className="rounded-xl border border-zinc-800 p-6">
              API Integration
            </div>

          </div>

        </div>
      </section>

      <section className="py-8 border-t border-zinc-900">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-6">
      What Is App Development?
    </h2>

    <p className="text-zinc-400 leading-8">
      App development is the process of creating digital solutions that
      help businesses serve customers better, manage operations more
      efficiently, and grow faster.
    </p>

    <p className="mt-4 text-zinc-400 leading-8">
      Whether you need an application for customer bookings, order
      management, employee tracking, online services, or business
      operations, a custom application can simplify your daily work and
      improve the experience for your customers.
    </p>

    <p className="mt-4 text-zinc-400 leading-8">
      At SH Tech Lab, we build applications that are easy to use,
      reliable, and designed around your business goals.
    </p>

  </div>
</section>

 <section className="py-8 border-t border-zinc-900">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-12">
      Solutions We Build
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="rounded-3xl border border-zinc-800 p-8">
        <h3 className="text-xl font-semibold mb-4">
          Customer Service Applications
        </h3>

        <p className="text-zinc-400">
          Help customers book services, make inquiries, and stay connected with your business.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 p-8">
        <h3 className="text-xl font-semibold mb-4">
          Business Management Systems
        </h3>

        <p className="text-zinc-400">
          Manage customers, staff, appointments, and important business information from one place.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 p-8">
        <h3 className="text-xl font-semibold mb-4">
          Booking & Scheduling Platforms
        </h3>

        <p className="text-zinc-400">
          Allow customers to schedule appointments and services online without phone calls.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 p-8">
        <h3 className="text-xl font-semibold mb-4">
          Custom Business Applications
        </h3>

        <p className="text-zinc-400">
          Applications built specifically around your business workflow and requirements.
        </p>
      </div>

    </div>

  </div>
</section>

<section className="py-8 border-t border-zinc-900">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-6">
      Why Businesses Choose Custom Applications
    </h2>

    <p className="text-zinc-400 leading-8">
      Every business operates differently. Off-the-shelf software often
      includes unnecessary features while missing the tools your team
      actually needs.
    </p>

    <p className="mt-4 text-zinc-400 leading-8">
      A custom application is designed specifically for your business,
      helping you work more efficiently and provide a better experience
      for your customers.
    </p>

    <ul className="mt-8 space-y-4 text-zinc-300">
      <li>✓ Save time on repetitive tasks</li>
      <li>✓ Improve customer experience</li>
      <li>✓ Reduce manual paperwork</li>
      <li>✓ Organize business information</li>
      <li>✓ Improve team productivity</li>
      <li>✓ Support business growth</li>
    </ul>

  </div>
</section>

<section className="py-8 border-t border-zinc-900">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-12">
      What You Get
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="rounded-2xl border border-zinc-800 p-6">
        <h3 className="font-semibold text-xl mb-3">
          Easy to Use
        </h3>

        <p className="text-zinc-400">
          Simple interfaces designed for everyday users.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        <h3 className="font-semibold text-xl mb-3">
          Fast & Reliable
        </h3>

        <p className="text-zinc-400">
          Smooth performance for both your team and customers.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        <h3 className="font-semibold text-xl mb-3">
          Mobile Friendly
        </h3>

        <p className="text-zinc-400">
          Works seamlessly on phones, tablets, and computers.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        <h3 className="font-semibold text-xl mb-3">
          Ongoing Support
        </h3>

        <p className="text-zinc-400">
          Continued assistance whenever your business needs help.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-8 border-t border-zinc-900">
  <div className="container mx-auto px-4 max-w-6xl">

    <h2 className="text-3xl font-bold mb-12">
      How We Build Your Application
    </h2>

    <div className="grid md:grid-cols-5 gap-6">

      <div className="rounded-xl border border-zinc-800 p-6">
        <strong>1.</strong> Understanding Your Business
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        <strong>2.</strong> Planning the Solution
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        <strong>3.</strong> Building the Application
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        <strong>4.</strong> Quality Checking
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        <strong>5.</strong> Launch & Support
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