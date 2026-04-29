import Container from "./Container";

export default function Services() {
  return (
    <section>
      <Container>
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Website Development</h3>
            <p>Modern, fast, and SEO-friendly websites.</p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">UI/UX Design</h3>
            <p>Clean and conversion-focused design.</p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Maintenance</h3>
            <p>Keep your website updated and secure.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}