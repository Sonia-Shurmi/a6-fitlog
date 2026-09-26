"use client";

import { WorkoutContext } from "@/context/WorkoutProvider";
import { Workout } from "@/types/workout.type";
import React from "react";
import { toast } from "react-toastify";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";

const SaveLater = ({ workout }: { workout: Workout }) => {
  const { saveLater, setSaveLater } = React.useContext(
    WorkoutContext,
  ) as {
    saveLater: Workout[];
    setSaveLater: React.Dispatch<React.SetStateAction<Workout[]>>;
  };

  const handleSaveForLater = () => {
    const alreadyExists = saveLater.some(
      (item) => item.id === workout.id,
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
      type="button"
      onClick={handleSaveForLater}
      className="btn w-full border border-[#C2F800] bg-transparent px-4 text-sm font-bold text-[#C2F800] hover:bg-[#C2F800] hover:text-black sm:w-auto sm:px-6"
    >
      <FaRegHeart className="text-base sm:text-lg" />
      <span>Save for later</span>
    </button>
  );
};

export default SaveLater;