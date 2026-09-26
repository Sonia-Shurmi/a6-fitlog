import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-[#1C1F26] bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={logo}
            alt="Fitlog"
            width={120}
            height={40}
            className="h-[40px] w-auto"
          />

          <span className="ml-2 text-xl font-bold text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-xs leading-5 text-white/50 sm:text-sm">
          © {new Date().getFullYear()} FitLog — Workout Library.
          <span className="hidden sm:inline"> </span>
          Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;