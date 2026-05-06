export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}