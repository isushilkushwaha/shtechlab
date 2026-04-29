import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <Container>
        <h1 className="text-4xl font-bold mb-4">
          We Build Websites That Grow Your Business
        </h1>
        <p className="text-lg mb-6">
          Get a modern, fast, and SEO-ready website in just 5 days.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </Container>
    </section>
  );
}