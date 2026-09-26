import Image from "next/image";
import type { Workout } from "@/types/workout.type";

import TodaysPlan from "@/components/WorkoutDetails/TodaysPlan";
import SaveLater from "@/components/WorkoutDetails/SaveLater";

interface WorkoutDetailProps {
  params: Promise<{
    workoutid: string;
  }>;
}

const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: Workout[] = await res.json();

  return data;
};

const WorkoutDetail = async ({ params }: WorkoutDetailProps) => {
  const { workoutid } = await params;

  const workouts = await getWorkouts();

  const workout = workouts.find(
    (item) => String(item.id) === workoutid,
  );

  if (!workout) {
    return (
      <main className="min-h-screen bg-black px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">
            Workout not found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">

        {/* Left Side - Image */}
        <div className="relative h-[350px] overflow-hidden rounded-3xl border border-[#1C1F26] sm:h-[450px] lg:h-[600px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">

          {/* Title */}
          <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800]/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-[#C2F800] sm:px-4 sm:text-xs"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-8 rounded-2xl border border-[#1C1F26] bg-[#15171D] p-5 sm:p-6">

            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C2F800]">
              Key Specs
            </h2>

            <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:gap-x-8">

              {/* Equipment */}
              <div>
                <p className="text-[10px] font-bold text-white/40 sm:text-xs">
                  EQUIPMENT
                </p>

                <p className="mt-1 text-sm text-white">
                  {workout.equipment}
                </p>
              </div>

              {/* Difficulty */}
              <div>
                <p className="text-[10px] font-bold text-white/40 sm:text-xs">
                  DIFFICULTY
                </p>

                <p className="mt-1 text-sm text-white">
                  {workout.difficulty}
                </p>
              </div>

              {/* Sets */}
              <div>
                <p className="text-[10px] font-bold text-white/40 sm:text-xs">
                  SETS
                </p>

                <p className="mt-1 text-sm text-white">
                  {workout.sets}
                </p>
              </div>

              {/* Reps */}
              <div>
                <p className="text-[10px] font-bold text-white/40 sm:text-xs">
                  REPS
                </p>

                <p className="mt-1 text-sm text-white">
                  {workout.reps}
                </p>
              </div>

              {/* Duration */}
              <div>
                <p className="text-[10px] font-bold text-white/40 sm:text-xs">
                  DURATION
                </p>

                <p className="mt-1 text-sm text-white">
                  {workout.duration} min
                </p>
              </div>

              {/* Calories */}
              <div>
                <p className="text-[10px] font-bold text-white/40 sm:text-xs">
                  CALORIES
                </p>

                <p className="mt-1 text-sm text-white">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              {/* Rating */}
              <div>
                <p className="text-[10px] font-bold text-white/40 sm:text-xs">
                  RATING
                </p>

                <p className="mt-1 text-sm text-white">
                  ★ {workout.rating}
                </p>
              </div>

            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">

            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C2F800]">
              Instructions
            </h2>

            <ol className="space-y-4">
              {workout.instructions.map(
                (instruction: string, index: number) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-white/70 sm:gap-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-xs font-black text-black">
                      {index + 1}
                    </span>

                    <span>{instruction}</span>
                  </li>
                ),
              )}
            </ol>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TodaysPlan workout={workout} />
            <SaveLater workout={workout} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default WorkoutDetail;