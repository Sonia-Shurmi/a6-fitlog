"use client";

import WorkoutListedCard from "@/components/shared/WorkoutListedCard";
import { WorkoutContext } from "@/context/WorkoutProvider";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";

const ListedWorkoutPlan = () => {
  type Workout =
    React.ComponentProps<typeof WorkoutListedCard>["workout"];

  const { todaysplan, saveLater } = React.useContext(
    WorkoutContext,
  ) as {
    todaysplan: Workout[];
    saveLater: Workout[];
  };

  // Track which tab is active
  const [activeTab, setActiveTab] = React.useState<"plan" | "save">(
    "plan",
  );

  // Track sorting option
  const [sortBy, setSortBy] = React.useState("duration");

  // Select workouts based on active tab
  const activeWorkouts =
    activeTab === "plan" ? todaysplan : saveLater;

  // Sort current list
  const sortedWorkouts = [...activeWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

      {/* ================= HEADER & STATS ================= */}
      <section className="mb-8 rounded-2xl bg-[#15171D] p-5 text-white sm:mb-10 sm:p-6 lg:p-8">

        {/* Heading */}
        <div className="mb-7 sm:mb-8">
          <h2 className="text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
            My Plan
          </h2>

          <p className="mt-2 max-w-2xl text-sm font-bold leading-6 text-gray-300 sm:text-base sm:leading-7 lg:text-lg">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center sm:gap-6">

          {/* Exercises */}
          <div>
            <h3 className="text-xs font-bold uppercase text-white/60 sm:text-sm">
              Exercises
            </h3>

            <p className="mt-1 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              {activeWorkouts.length}
            </p>
          </div>

          {/* Minutes */}
          <div>
            <h3 className="text-xs font-bold uppercase text-white/60 sm:text-sm">
              Minutes
            </h3>

            <p className="mt-1 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              {activeWorkouts.reduce(
                (total, workout) => total + workout.duration,
                0,
              )}
            </p>
          </div>

          {/* Calories */}
          <div>
            <h3 className="text-xs font-bold uppercase text-white/60 sm:text-sm">
              Calories
            </h3>

            <p className="mt-1 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              {activeWorkouts.reduce(
                (total, workout) =>
                  total + workout.caloriesBurned,
                0,
              )}
            </p>
          </div>

        </div>
      </section>

      {/* ================= TABS + SORT ================= */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Tabs */}
        <div className="tabs tabs-lift w-full sm:w-auto">

          {/* Today's Plan */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab flex-1 sm:flex-none"
            aria-label="Today's Plan"
            defaultChecked
            onChange={() => setActiveTab("plan")}
          />

          {/* Save for Later */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab flex-1 sm:flex-none"
            aria-label="Save for Later"
            onChange={() => setActiveTab("save")}
          />

        </div>

        {/* Sort By */}
        <div className="flex items-center justify-between gap-3 sm:justify-end">

          <span className="text-sm font-bold text-white/60">
            Sort By
          </span>

          <div className="relative">

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-full border border-[#1C1F26] bg-[#15171D] px-4 py-2.5 pr-10 text-sm font-bold text-white outline-none transition focus:border-[#C2F800] sm:px-5"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50" />

          </div>

        </div>
      </div>

      {/* ================= TODAY'S PLAN ================= */}
      {activeTab === "plan" && (
        <section className="mt-5 rounded-2xl border border-[#1C1F26] bg-base-100 p-3 sm:mt-6 sm:p-5 lg:p-6">

          <div className="flex flex-col gap-4">

            {todaysplan.length > 0 ? (
              sortedWorkouts.map((workout, index) => (
                <WorkoutListedCard
                  key={workout.id ?? index}
                  workout={workout}
                  type="plan"
                />
              ))
            ) : (
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-[#1C1F26] bg-[#15171D] px-5 py-10 text-center sm:min-h-[300px] sm:px-6 sm:py-12">

                <h3 className="text-xl font-black uppercase text-white sm:text-2xl">
                  NOTHING HERE YET
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-6 rounded-full bg-[#C2F800] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#d4ff33] sm:px-6 sm:py-3"
                >
                  Go to workouts
                </Link>

              </div>
            )}

          </div>
        </section>
      )}

      {/* ================= SAVE FOR LATER ================= */}
      {activeTab === "save" && (
        <section className="mt-5 rounded-2xl border border-[#1C1F26] bg-base-100 p-3 sm:mt-6 sm:p-5 lg:p-6">

          <div className="flex flex-col gap-4">

            {saveLater.length > 0 ? (
              sortedWorkouts.map((workout, index) => (
                <WorkoutListedCard
                  key={workout.id ?? index}
                  workout={workout}
                  type="save"
                />
              ))
            ) : (
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-[#1C1F26] bg-[#15171D] px-5 py-10 text-center sm:min-h-[300px] sm:px-6 sm:py-12">

                <h3 className="text-xl font-black uppercase text-white sm:text-2xl">
                  NOTHING HERE YET
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-6 rounded-full bg-[#C2F800] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#d4ff33] sm:px-6 sm:py-3"
                >
                  Go to workouts
                </Link>

              </div>
            )}

          </div>
        </section>
      )}

    </main>
  );
};

export default ListedWorkoutPlan;