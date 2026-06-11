import type { Metadata } from "next";
import ConsultationForm from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Book Free Consultation | SH Tech Lab",
  description:
    "Schedule a free consultation with SH Tech Lab to discuss your website, app development, SEO, or digital growth requirements.",
};

export default function ConsultationFormPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <ConsultationForm />
        </div>
      </section>
    </main>
  );
}