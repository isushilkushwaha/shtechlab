import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <p className="text-center">
          © {new Date().getFullYear()} SH Tech Lab. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}