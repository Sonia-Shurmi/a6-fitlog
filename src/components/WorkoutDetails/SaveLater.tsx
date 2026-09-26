"use client";

import { WorkoutContext } from "@/context/WorkoutProvider";
import { Workout } from "@/types/workout.type";
import React from "react";
import { toast } from "react-toastify";

const SaveLater = ({ workout }: { workout: Workout }) => {
  const { saveLater, setSaveLater } = React.useContext(
    WorkoutContext,
  ) as {
    saveLater: Workout[];
    setSaveLater: React.Dispatch<React.SetStateAction<Workout[]>>;
  };

  const handleSaveForLater = () => {
    const alreadyExists = saveLater.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      toast.info(`${workout.name} is already saved for later!`);
      return;
    }

    setSaveLater([...saveLater, workout]);

    toast.success(`${workout.name} has been saved for later!`);
  };

  return (
    <button
      onClick={handleSaveForLater}
      className="btn border border-[#C2F800] bg-transparent px-6 font-bold text-[#C2F800] hover:bg-[#C2F800] hover:text-black"
    >
      <span>♡</span>
      Save for later
    </button>
  );
};

export default SaveLater;