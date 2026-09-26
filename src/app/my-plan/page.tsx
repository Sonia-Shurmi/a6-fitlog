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
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 my-8">

      {/* Header & Stats */}
      <div className="mb-10 rounded-2xl bg-[#15171D] p-6 text-white">

        <div className="mb-8">
          <h2 className="text-4xl font-bold uppercase">
            My Plan
          </h2>

          <p className="text-lg font-bold text-gray-300">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-6 text-sm font-bold text-white/70">

          {/* Exercises */}
          <div className="text-center">
            <h3>Exercises</h3>

            <p className="text-5xl font-bold">
              {activeWorkouts.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="text-center">
            <h3>Minutes</h3>

            <p className="text-5xl font-bold">
              {activeWorkouts.reduce(
                (total, workout) => total + workout.duration,
                0,
              )}
            </p>
          </div>

          {/* Calories */}
          <div className="text-center">
            <h3>Calories</h3>

            <p className="text-5xl font-bold">
              {activeWorkouts.reduce(
                (total, workout) =>
                  total + workout.caloriesBurned,
                0,
              )}
            </p>
          </div>

        </div>
      </div>

      {/* Tabs + Sort By */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Tabs */}
        <div className="tabs tabs-lift">

          {/* Today's Plan */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
            onChange={() => setActiveTab("plan")}
          />

          {/* Save for Later */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Save for Later"
            onChange={() => setActiveTab("save")}
          />

        </div>

        {/* Sort By */}
        <div className="flex items-center justify-end gap-3">

          <span className="text-sm font-bold text-white/60">
            Sort By
          </span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-full border border-[#1C1F26] bg-[#15171D] px-5 py-2.5 pr-10 text-sm font-bold text-white outline-none focus:border-[#C2F800]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50" />
          </div>

        </div>

      </div>

      {/* Today's Plan Content */}
      {activeTab === "plan" && (
        <div className="mt-6 rounded-2xl border border-[#1C1F26] bg-base-100 p-6">

          <div className="flex flex-col gap-4">

            {todaysplan.length > 0 ? (
              sortedWorkouts.map((workout, index) => (
                <WorkoutListedCard
                  key={index}
                  workout={workout}
                  type="plan"
                />
              ))
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#1C1F26] bg-[#15171D] px-6 py-12 text-center">

                <h3 className="text-2xl font-black uppercase text-white">
                  NOTHING HERE YET
                </h3>

                <p className="mt-3 max-w-md text-sm text-white/50">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d4ff33]"
                >
                  Go to workouts
                </Link>

              </div>
            )}

          </div>
        </div>
      )}

      {/* Save for Later Content */}
      {activeTab === "save" && (
        <div className="mt-6 rounded-2xl border border-[#1C1F26] bg-base-100 p-6">

          <div className="flex flex-col gap-4">

            {saveLater.length > 0 ? (
              sortedWorkouts.map((workout, index) => (
                <WorkoutListedCard
                  key={index}
                  workout={workout}
                  type="save"
                />
              ))
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#1C1F26] bg-[#15171D] px-6 py-12 text-center">

                <h3 className="text-2xl font-black uppercase text-white">
                  NOTHING HERE YET
                </h3>

                <p className="mt-3 max-w-md text-sm text-white/50">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d4ff33]"
                >
                  Go to workouts
                </Link>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default ListedWorkoutPlan;