'use client';
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { todaysplan, saveLater } = useContext(WorkoutContext) as {
          todaysplan: Array<{ id: string | number }>;
          saveLater: Array<{ id: string | number }>;
  };
      
    const pathname = usePathname();
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
            className="h-[40px] w-auto"
          />
          <div className="ml-2 text-xl font-bold text-white">
            FITLOG
          </div>
        </Link>

        {/* Navigation */}

<div className="hidden items-center gap-2 md:flex">
  <Link
    href="/"
    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
      pathname === "/"
        ? "bg-[#C2F800] text-black"
        : "text-white/70 hover:bg-white/10 hover:text-white"
    }`}
  >
    Workout
  </Link>

  <Link
    href="/my-plan"
    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
      pathname === "/my-plan"
        ? "bg-[#C2F800] text-black"
        : "text-white/70 hover:bg-white/10 hover:text-white"
    }`}
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
            Plan <span className="ml-1">{todaysplan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#C2F800] px-4 py-2 text-sm font-bold text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black"
          >
            Saved <span className="ml-1">{saveLater.length}</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;