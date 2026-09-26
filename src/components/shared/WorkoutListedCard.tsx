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
    <div className="flex justify-between overflow-hidden rounded-2xl border border-[#1C1F26] bg-[#15171D] transition-all duration-300 hover:border-[#C2F800]/50">

      {/* Left Side */}
      <div className="flex flex-col md:flex-row">

        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden md:h-auto md:w-64">
          <Image
            src={workout.image}
            alt={workout.name}
            width={256}
            height={150}
            className="object-cover"
          />
        </div>

        {/* Workout Info */}
        <div className="p-5 md:p-6">

          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#C2F800]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-black uppercase leading-tight text-white md:text-2xl">
            {workout.name}
          </h3>

          <p className="mt-2 text-sm text-white/50">
            {workout.equipment}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/60">
            <span>◷ {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>★ {workout.rating}</span>
          </div>

        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 p-5 md:p-6">

        {/* Button 1 - Both tabs */}
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-white/10 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-white/10"
        >
          View Details
        </Link>

        {/* Button 2 - ONLY Today's Plan */}
        {type === "plan" && (
          <button
            type="button"
            className="rounded-full bg-[#C2F800] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#d4ff33]"
          >
            Mark as Done
          </button>
        )}

        {/* Remove - Both tabs */}
        <button
          type="button"
          onClick={handleRemove}
          className="text-xl text-white/50 transition hover:text-red-400"
        >
          <FaTimesCircle />
        </button>

      </div>
    </div>
  );
};

export default WorkoutListedCard;