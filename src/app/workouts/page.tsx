import WorkoutCard from "@/components/shared/WorkoutCard";
import { Workout } from "@/types/workout.type";
import React from "react";

const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutLibrary = async () => {
  const workoutsData = await getWorkouts();
  return (
    <section id="library" className="bg-black px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            THE LIBRARY
          </h2>
          <p className="mt-3 text-base text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workoutsData.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;
