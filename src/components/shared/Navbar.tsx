"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutProvider";

const Navbar = () => {
  const { todaysplan, saveLater } = useContext(WorkoutContext) as {
    todaysplan: Array<{ id: string | number }>;
    saveLater: Array<{ id: string | number }>;
  };

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b border-[#1C1F26] bg-black text-white">

      {/* Main Navbar */}
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center"
        >
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

        {/* Desktop Navigation */}
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

        {/* Desktop Status Badges */}
        <div className="hidden items-center gap-2 md:flex">

          <Link
            href="/my-plan"
            className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-bold text-black transition hover:scale-105"
          >
            Plan
            <span className="ml-1">
              {todaysplan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#C2F800] px-4 py-2 text-sm font-bold text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black"
          >
            Saved
            <span className="ml-1">
              {saveLater.length}
            </span>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-[#1C1F26] bg-black px-4 pb-5 md:hidden">

          <div className="flex flex-col gap-2 pt-4">

            {/* Workout */}
            <Link
              href="/"
              onClick={closeMenu}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                pathname === "/"
                  ? "bg-[#C2F800] text-black"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              Workout
            </Link>

            {/* My Plan */}
            <Link
              href="/my-plan"
              onClick={closeMenu}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                pathname === "/my-plan"
                  ? "bg-[#C2F800] text-black"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              My Plan
            </Link>

            {/* Plan */}
            <Link
              href="/my-plan"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl bg-[#C2F800] px-4 py-3 text-sm font-bold text-black"
            >
              <span>Today's Plan</span>

              <span className="rounded-full bg-black/10 px-2 py-0.5">
                {todaysplan.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl border border-[#C2F800] px-4 py-3 text-sm font-bold text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black"
            >
              <span>Saved for Later</span>

              <span className="rounded-full bg-[#C2F800]/10 px-2 py-0.5">
                {saveLater.length}
              </span>
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;