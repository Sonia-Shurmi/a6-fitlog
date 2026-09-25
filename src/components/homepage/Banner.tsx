import Image from "next/image";
import Link from "next/link";

import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-black px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 rounded-3xl bg-[#15171D] px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-16">

        {/* Content */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          {/* Subtitle */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          {/* CTA */}
          <Link
            href="#library"
            className="btn mt-8 border-none bg-[#C2F800] px-6 text-sm font-bold text-black hover:bg-[#C2F800]/90"
          >
            BROWSE WORKOUTS
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl">
            <Image
              src={bannerImage}
              alt="Workout training"
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;