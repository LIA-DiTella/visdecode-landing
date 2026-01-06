export default function UnderMaintenance() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
        Under maintenance
      </h1>

      <p className="text-gray-600 max-w-md mb-8">
        VisDecode is temporarily unavailable while we improve the platform.
        Please check back soon.
      </p>

      <a
        href="/"
        className="rounded-xl border border-gray-300 px-6 py-2 hover:bg-gray-100 transition"
      >
        Back to home
      </a>
    </div>
  );
}
