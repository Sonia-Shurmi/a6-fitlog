"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { Workout } from "@/types/workout.type";
import React from "react";

type WorkoutListedCardProps = {
  workout: Workout;
  type: "plan" | "save";
};

const WorkoutListedCard = ({
  workout,
  type,
}: WorkoutListedCardProps) => {
  const { setTodaysplan, setSaveLater } = React.useContext(
    WorkoutContext,
  ) as {
    setTodaysplan: React.Dispatch<React.SetStateAction<Workout[]>>;
    setSaveLater: React.Dispatch<React.SetStateAction<Workout[]>>;
  };

  const handleRemove = () => {
    if (type === "plan") {
      setTodaysplan((prev) =>
        prev.filter((item) => item.id !== workout.id),
      );
    }

    if (type === "save") {
      setSaveLater((prev) =>
        prev.filter((item) => item.id !== workout.id),
      );
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-[#1C1F26] bg-[#15171D] transition-all duration-300 hover:border-[#C2F800]/50">

      <div className="flex flex-col sm:flex-row">

        {/* ================= IMAGE ================= */}
        <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48 md:w-56 lg:w-64">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, 256px"
            className="object-cover"
          />
        </div>

        {/* ================= WORKOUT INFO ================= */}
        <div className="min-w-0 flex-1 p-4 sm:p-5 md:p-6">

          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#C2F800] sm:text-[11px]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="break-words text-xl font-black uppercase leading-tight text-white sm:text-2xl">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-2 text-sm text-white/50">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/60 sm:mt-5 sm:text-sm">
            <span className="whitespace-nowrap">
              ◷ {workout.duration} min
            </span>

            <span className="whitespace-nowrap">
              🔥 {workout.caloriesBurned} kcal
            </span>

            <span className="whitespace-nowrap">
              ★ {workout.rating}
            </span>
          </div>
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden shrink-0 flex-col items-center justify-center gap-3 p-5 sm:flex md:p-6">

          <Link
            href={`/workouts/${workout.id}`}
            className="w-full rounded-full border border-white/10 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-white/10"
          >
            View Details
          </Link>

          {type === "plan" && (
            <button
              type="button"
              className="w-full whitespace-nowrap rounded-full bg-[#C2F800] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#d4ff33]"
            >
              Mark as Done
            </button>
          )}

          <button
            type="button"
            onClick={handleRemove}
            aria-label={`Remove ${workout.name}`}
            title="Remove"
            className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-white/40 transition hover:bg-white/5 hover:text-red-400"
          >
            <FaTimesCircle />
          </button>

        </div>
      </div>

      {/* ================= MOBILE ACTIONS ================= */}
      <div className="flex items-center gap-2 border-t border-[#1C1F26] p-4 sm:hidden">

        <Link
          href={`/workouts/${workout.id}`}
          className="flex-1 rounded-full border border-white/10 px-4 py-2.5 text-center text-xs font-bold text-white transition hover:bg-white/10"
        >
          View Details
        </Link>

        {type === "plan" && (
          <button
            type="button"
            className="flex-1 rounded-full bg-[#C2F800] px-4 py-2.5 text-xs font-bold text-black transition hover:bg-[#d4ff33]"
          >
            Mark as Done
          </button>
        )}

        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          title="Remove"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg text-white/40 transition hover:bg-white/5 hover:text-red-400"
        >
          <FaTimesCircle />
        </button>

      </div>
    </article>
  );
};

export default WorkoutListedCard;