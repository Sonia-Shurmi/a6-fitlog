import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types/workout.type";

import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { FaFire } from "@react-icons/all-files/fa/FaFire";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#1C1F26] bg-[#15171D] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/50 hover:shadow-lg">

        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">

          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#C2F800] sm:px-3 sm:text-[11px]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="break-words text-lg font-black uppercase leading-tight text-white sm:text-xl">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-2 text-xs text-white/50 sm:text-sm">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#1C1F26] pt-4 text-xs text-white/60 sm:justify-between sm:text-sm">

            {/* Duration */}
            <span className="flex items-center gap-1.5">
              <FaRegClock className="shrink-0 text-[#C2F800]" />
              <span>{workout.duration} min</span>
            </span>

            {/* Calories */}
            <span className="flex items-center gap-1.5">
              <FaFire className="shrink-0 text-[#C2F800]" />
              <span>{workout.caloriesBurned} kcal</span>
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1.5">
              <FaStar className="shrink-0 text-[#C2F800]" />
              <span>{workout.rating}</span>
            </span>

          </div>
        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;