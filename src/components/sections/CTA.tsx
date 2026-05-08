import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">

        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-10 text-center">

          <h2 className="text-4xl font-bold text-white mb-4">
            Ready To Grow Your Business?
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Let SH Tech Lab build your next website, application or digital product.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:scale-105 transition"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTA;