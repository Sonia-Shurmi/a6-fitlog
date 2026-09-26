import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Workout = {
    id: string | number;
    image: string;
    name: string;
    muscleGroups: string[];
    equipment: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
};

    const WorkoutListedCard = ({ workout }: { workout: Workout }) => {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#1C1F26] bg-[#15171D] transition-all duration-300 hover:border-[#C2F800]/50 md:flex-row">

        {/* Image */}
        <div className="relative h-52 w-full shrink-0 overflow-hidden md:h-auto md:w-64">
            <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>

        {/* Workout Info */}
        <div className="flex flex-1 flex-col justify-center p-5 md:p-6">

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
            <h3 className="text-xl font-black uppercase leading-tight text-white md:text-2xl">
            {workout.name}
            </h3>

            {/* Equipment */}
            <p className="mt-2 text-sm text-white/50">
            {workout.equipment}
            </p>

            {/* Stats */}
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/60">

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

        {/* Actions */}
        <div className="flex flex-row items-center gap-3 p-5 md:w-48 md:flex-col md:justify-center md:p-6">

            <Link
            href={`/workouts/${workout.id}`}
            className="flex-1 rounded-full border border-white/10 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-white/10 md:w-full"
            >
            View Details
            </Link>

            <button
            type="button"
            className="flex-1 rounded-full bg-[#C2F800] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#d4ff33] md:w-full"
            >
            Mark as Done
            </button>

        </div>

    </div>
    );
};

export default WorkoutListedCard;