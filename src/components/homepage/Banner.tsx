import Image from "next/image";
import Link from "next/link";

import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-black px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-8
          overflow-hidden
          rounded-3xl
          bg-[#15171D]
          px-6
          py-10
          sm:px-10
          sm:py-12
          md:gap-10
          lg:grid-cols-2
          lg:gap-12
          lg:px-16
          lg:py-16
        "
      >

        {/* Content */}
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#C2F800] sm:mb-5 sm:text-sm sm:tracking-[0.25em]">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1
            className="
              text-4xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-white/60
              sm:mt-7
              sm:text-base
              sm:leading-7
              lg:text-lg
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          {/* CTA */}
          <Link
            href="#library"
            className="
              btn
              mt-6
              border-none
              bg-[#C2F800]
              px-6
              text-sm
              font-bold
              text-black
              hover:bg-[#C2F800]/90
              sm:mt-8
            "
          >
            BROWSE WORKOUTS
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative flex w-full justify-center lg:justify-end">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl sm:max-w-lg lg:max-w-xl">
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