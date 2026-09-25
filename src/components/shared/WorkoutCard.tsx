import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/type";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-2xl border border-[#1C1F26] bg-[#15171D] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/50">

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">

          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
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
          <h3 className="text-xl font-black uppercase leading-tight text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-2 text-sm text-white/50">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-5 flex items-center justify-between border-t border-[#1C1F26] pt-4 text-sm text-white/60">

            <span className="flex items-center gap-1.5">
              <span>◷</span>
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <span>🔥</span>
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <span>★</span>
              {workout.rating}
            </span>

          </div>

        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;