"use client";

import { WorkoutContext } from "@/context/WorkoutProvider";
import { Workout } from "@/types/workout.type";
import React from "react";
import { toast } from "react-toastify";

const TodaysPlan = ({ workout }: { workout: Workout }) => {
  const { todaysplan, setTodaysplan } = React.useContext(
    WorkoutContext,
  ) as {
    todaysplan: Workout[];
    setTodaysplan: React.Dispatch<React.SetStateAction<Workout[]>>;
  };

  const handleAddToPlan = () => {
    const alreadyExists = todaysplan.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      toast.info(`${workout.name} is already in your plan!`);
      return;
    }

    setTodaysplan([...todaysplan, workout]);

    toast.success(`${workout.name} has been added to your plan!`);
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="btn border-none bg-[#C2F800] px-6 font-bold text-black hover:bg-[#C2F800]/90"
    >
      <span>＋</span>
      Add to todays plan
    </button>
  );
};

export default TodaysPlan;