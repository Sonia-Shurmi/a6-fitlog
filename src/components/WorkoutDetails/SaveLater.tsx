'use client';
import { WorkoutContext } from '@/context/WorkoutProvider';
import { Workout } from '@/types/workout.type';
import React from 'react';

const SaveLater = ({ workout }: { workout: Workout }) => {
    const { saveLater, setSaveLater } = React.useContext(WorkoutContext);
    const handleSaveForLater = () => {
        // Logic to save the workout for later
        console.log("Workout saved for later", workout);
        setSaveLater([...saveLater, workout]);
        alert(`${workout.name} has been saved for later!`);
    };

    return (
        <button onClick={()=>handleSaveForLater()} className="btn border border-[#C2F800] bg-transparent px-6 font-bold text-[#C2F800] hover:bg-[#C2F800] hover:text-black">
            <span>♡</span>
            Save for later
        </button>
    );
};

export default SaveLater;