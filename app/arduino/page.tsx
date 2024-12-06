"use client";

import React from "react";
import useArduino from "@/hooks/useArduino";
import type { Arduino } from "@/types";
import ArduinoCard from "@/components/custom/common/cards/ArduinoCard";
import ArduinoSkeletonCard from "@/components/custom/common/skelton/ArduinoSkeletonCard";

const Arduino = () => {
  const { allDevices } = useArduino();

  // Determine if data is loading
  const isLoading = allDevices.length === 0;

  return (
    <div className="grid gap-6 p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {isLoading
        ? // Render skeleton cards while data is loading
          Array.from({ length: 2 }).map((_, index) => (
            <div key={index}>
              <ArduinoSkeletonCard />
            </div>
          ))
        : // Render actual Arduino cards once data is available
          allDevices.map((card: Arduino, index: number) => (
            <div key={index}>
              <ArduinoCard card={card} />
            </div>
          ))}
    </div>
  );
};

export default Arduino;
