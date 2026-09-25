import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="border-b border-[#1C1F26] bg-black text-white">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Fitlog"
            width={120}
            height={40}
            priority
            className="h-auto w-auto"
          />
          FIT<span className="text-[#C2F800]">LOG</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className="rounded-full bg-[#C2F800] px-5 py-2 text-sm font-semibold text-black"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-5 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Status Badges */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-bold text-black transition hover:scale-105"
          >
            Plan <span className="ml-1">0</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#C2F800] px-4 py-2 text-sm font-bold text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black"
          >
            Saved <span className="ml-1">0</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;