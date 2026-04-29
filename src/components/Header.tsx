import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">SH Tech Lab</h1>

          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}