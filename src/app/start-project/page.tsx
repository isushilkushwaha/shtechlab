import type { Metadata } from "next";
import ProjectForm from "@/components/forms/ProjectForm";

export const metadata: Metadata = {
  title: "Start Your Project | SH Tech Lab",
  description:
    "Tell us about your project requirements. Get a custom website, web application, mobile app, SEO, or digital solution tailored to your business goals.",
};

export default function StartProjectPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <ProjectForm />
        </div>
      </section>
    </main>
  );
}