export default function UnderMaintenance() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">Under maintenance</h1>
        <p className="text-gray-600 max-w-md mb-8 mx-auto">
          VisDecode is temporarily unavailable while we improve the platform.
          Please check back soon.
        </p>

        <a
          href="/"
          className="inline-block rounded-xl border border-gray-300 px-6 py-2 hover:bg-gray-100 transition"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}
