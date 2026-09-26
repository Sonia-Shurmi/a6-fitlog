import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
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
      </aside>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
