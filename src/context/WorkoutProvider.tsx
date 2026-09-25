'use client';
import React from 'react';


export const WorkoutContext = React.createContext({});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [todaysplan, setTodaysplan] = React.useState([]);
    const [saveLater, setSaveLater] = React.useState([]);
    
    const workoutContextValue = {
        todaysplan,
        setTodaysplan,
        saveLater,
        setSaveLater
    };

    return <WorkoutContext.Provider value={workoutContextValue}>{children}</WorkoutContext.Provider>;
};

export default WorkoutProvider;