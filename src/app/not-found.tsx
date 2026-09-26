import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0D0F12] px-6 text-center text-white">
      <h1 className="text-8xl font-black text-[#C2F800]">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold uppercase">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-white/50">
        The page you are looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black transition hover:bg-[#d4ff33]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default NotFound;