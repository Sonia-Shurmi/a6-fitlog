'use client';
import { WorkoutContext } from '@/context/WorkoutProvider';
import React from 'react';

const ListedWorkoutPlan = () => {
    const { todaysplan, saveLater } = React.useContext(WorkoutContext);
    console.log("Today's Plan:", todaysplan);
    console.log("Save for Later:", saveLater);
    return (
        <div>
            <h2>Today's Plan</h2>
            <ul>
                {todaysplan.map((workout, index) => (
                    <li key={index}>{workout.name}</li>
                ))}
            </ul>
            <h2>Save for Later</h2>
            <ul>
                {saveLater.map((workout, index) => (
                    <li key={index}>{workout.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListedWorkoutPlan;