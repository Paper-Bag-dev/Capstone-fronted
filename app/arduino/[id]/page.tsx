"use client";

import React, { useEffect } from "react";
import { FaMicrochip, FaBatteryFull } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import useArduino from "@/hooks/useArduino";
import ArduinoChips from "@/components/custom/common/chips/ArduinoChips";
import RealTimeChart from "@/components/custom/common/charts/RealTimeChart";
import { ImDroplet } from "react-icons/im";

const ArduinoPage = ({ params }: any) => {
  const { id } = params;
  const { getArduinoById, singleDevice, lastUpdated } = useArduino();

  useEffect(() => {
    getArduinoById(id); // Call API whenever the ID or lastUpdated changes
  }, [id, lastUpdated]);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-3.5rem)] items-center gap-8 bg-gray-50 dark:bg-[#06040b] p-6 transition-colors duration-300">
      {/* Chips Section */}
      <div className="flex flex-wrap gap-4 w-full max-w-4xl">
        <ArduinoChips
          icon={<HiIdentification className="text-yellow-500" />}
          label="Device ID"
          value={id}
        />
        {singleDevice && (
          <>
            <ArduinoChips
              icon={<FaMicrochip className="text-indigo-500" />}
              label="Name"
              value={singleDevice.name}
            />
            <ArduinoChips
              icon={<FaBatteryFull className="text-green-500" />}
              label="Battery"
              value={singleDevice.battery}
            />
            <ArduinoChips
              icon={<ImDroplet className="text-red-500" />}
              label="Latest VOC"
              value={singleDevice.latestVoc}
            />
          </>
        )}
      </div>

      {/* Real-Time Chart */}
      <div className="bg-white dark:bg-[#1a1a1a] shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Real-Time VOC Chart
        </h2>
        <RealTimeChart updates={singleDevice?.updates || []} />
      </div>
    </div>
  );
};

export default ArduinoPage;
