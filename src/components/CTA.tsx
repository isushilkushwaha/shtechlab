import Container from "./Container";

export default function CTA() {
  return (
    <section className="bg-black text-white">
      <Container>
        <h2 className="text-3xl font-bold mb-4">
          Ready to grow your business?
        </h2>
        <p className="mb-6">Let’s build your website today.</p>

        <button className="bg-white text-black px-6 py-3 rounded-lg">
          Contact Us
        </button>
      </Container>
    </section>
  );
}