"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { FaFire } from "@react-icons/all-files/fa/FaFire";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { Workout } from "@/types/workout.type";
import React from "react";
import { toast } from "react-toastify";

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

  // Remove workout
  const handleRemove = () => {
    if (type === "plan") {
      setTodaysplan((prev) =>
        prev.filter((item) => item.id !== workout.id),
      );

      toast.success(`${workout.name} removed from today's plan.`);
    }

    if (type === "save") {
      setSaveLater((prev) =>
        prev.filter((item) => item.id !== workout.id),
      );

      toast.success(`${workout.name} removed from saved workouts.`);
    }
  };

  // Mark workout as done
  const handleMarkAsDone = () => {
    setTodaysplan((prev) =>
      prev.filter((item) => item.id !== workout.id),
    );

    toast.success(`${workout.name} marked as done!`);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#1C1F26] bg-[#15171D] transition-all duration-300 hover:border-[#C2F800]/50 md:flex-row md:items-stretch md:justify-between">

      {/* Left Side */}
      <div className="flex min-w-0 flex-1 flex-col sm:flex-row">

        {/* Image */}
        <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-auto sm:w-52 md:w-56 lg:w-64">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 208px, (max-width: 1024px) 224px, 256px"
            className="object-cover"
          />
        </div>

        {/* Workout Information */}
        <div className="min-w-0 p-5 md:p-6">

          {/* Muscle Groups */}
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

          {/* Workout Name */}
          <h3 className="break-words text-xl font-black uppercase leading-tight text-white md:text-2xl">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-2 text-sm text-white/50">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/60">

            {/* Duration */}
            <span className="flex items-center gap-1.5">
              <FaRegClock className="text-[#C2F800]" />
              {workout.duration} min
            </span>

            {/* Calories */}
            <span className="flex items-center gap-1.5">
              <FaFire className="text-[#C2F800]" />
              {workout.caloriesBurned} kcal
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1.5">
              <FaStar className="text-[#C2F800]" />
              {workout.rating}
            </span>

          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex w-full flex-wrap items-center gap-3 border-t border-[#1C1F26] p-4 sm:p-5 md:w-auto md:border-l md:border-t-0 md:p-6">

        {/* View Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="flex-1 rounded-full border border-white/10 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:flex-none sm:px-5"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        {type === "plan" && (
          <button
            type="button"
            onClick={handleMarkAsDone}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C2F800] px-4 py-2.5 text-sm font-bold text-black transition hover:bg-[#d4ff33] sm:flex-none sm:px-5"
          >
            <FaCheck className="text-sm" />
            Mark as Done
          </button>
        )}

        {/* Remove */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl text-white/50 transition hover:bg-red-400/10 hover:text-red-400"
        >
          <FaTimesCircle />
        </button>

      </div>
    </div>
  );
};

export default WorkoutListedCard;