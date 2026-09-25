import Image from "next/image";
import type { Workout } from "@/type";
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

  const data = await res.json();
  return data;
};

const WorkoutDetail = async ({ params }: WorkoutDetailProps) => {
  const { workoutid } = await params;

  const workouts = await getWorkouts();

  const workout = workouts.find(
    (w) => w.id === Number(workoutid)
  );

  if (!workout) {
    return (
      <main className="min-h-screen bg-black px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">Workout not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

        {/* Left Side - Image */}
        <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-[#1C1F26]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">

          {/* Title */}
          <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
            {workout.description}
          </p>

          {/* Category Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800]/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#C2F800]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-8 rounded-2xl border border-[#1C1F26] bg-[#15171D] p-6">

            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C2F800]">
              Key Specs
            </h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5">

              <div>
                <p className="text-xs font-bold text-white/40">EQUIPMENT</p>
                <p className="mt-1 text-sm text-white">
                  {workout.equipment}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-white/40">DIFFICULTY</p>
                <p className="mt-1 text-sm text-white">
                  {workout.difficulty}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-white/40">SETS</p>
                <p className="mt-1 text-sm text-white">
                  {workout.sets}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-white/40">REPS</p>
                <p className="mt-1 text-sm text-white">
                  {workout.reps}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-white/40">DURATION</p>
                <p className="mt-1 text-sm text-white">
                  {workout.duration} min
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-white/40">CALORIES</p>
                <p className="mt-1 text-sm text-white">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-white/40">RATING</p>
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
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-sm leading-6 text-white/70"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-xs font-black text-black">
                    {index + 1}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
              <TodaysPlan workout={workout} />
              <SaveLater workout={workout} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default WorkoutDetail;
