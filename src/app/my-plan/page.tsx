"use client";
import WorkoutListedCard from "@/components/shared/WorkoutListedCard";
import { WorkoutContext } from "@/context/WorkoutProvider";
import Link from "next/link";
import React from "react";

const ListedWorkoutPlan = () => {
  type Workout = React.ComponentProps<typeof WorkoutListedCard>["workout"];
  const { todaysplan, saveLater } = React.useContext(WorkoutContext) as {
    todaysplan: Workout[];
    saveLater: Workout[];
  };

  return (
    <div className="container mx-auto flex flex-col min-h-screen min-w-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#15171D] text-white rounded-2xl p-6 mb-10">
        <div className="mb-8">
          <h2 className="text-4xl font-bold uppercase">My Plan</h2>
          <p className="text-lg text-gray-300 font-bold">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70 justify-around">
          <div className="text-center">
            <h3>Exercises</h3>
            <p className="text-5xl font-bold">{todaysplan.length}</p>
          </div>
          <div className="text-center">
            <h3>Minutes</h3>
            <p className="text-5xl font-bold">
              {todaysplan.reduce(
                (total, workout) => total + workout.duration,
                0,
              )}
            </p>
          </div>
          <div>
            <h3>Calories</h3>
            <p className="text-5xl font-bold">
              {todaysplan.reduce(
                (total, workout) => total + workout.caloriesBurned,
                0,
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="flex flex-col gap-4">
            {todaysplan.length > 0 ? (
              todaysplan.map((workout, index) => (
                <WorkoutListedCard key={index} workout={workout} />
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

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Save for Later"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="flex flex-col gap-4">
            {saveLater.length > 0 ? (
              saveLater.map(
                (workout: (typeof saveLater)[number], index: number) => (
                  <WorkoutListedCard key={index} workout={workout} />
                ),
              )
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
      </div>
    </div>
  );
};

export default ListedWorkoutPlan;
