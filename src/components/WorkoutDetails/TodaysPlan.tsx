'use client';
import { WorkoutContext } from '@/context/WorkoutProvider';
import { Workout } from '@/types/workout.type';
import React from 'react';

const TodaysPlan = ({ workout }: { workout: Workout }) => {
    const { todaysplan, setTodaysplan } = React.useContext(WorkoutContext);
    

    const handleAddToPlan = () => {
        console.log("Adding workout to today's plan", workout);
        setTodaysplan([...todaysplan, workout]);
        alert(`${workout.name} has been added to your plan!`);
    }

    return (
        <button onClick={()=>handleAddToPlan()} className="btn border-none bg-[#C2F800] px-6 font-bold text-black hover:bg-[#C2F800]/90">
            <span>＋</span>
            Add to today's plan
        </button>
    );
};

export default TodaysPlan;