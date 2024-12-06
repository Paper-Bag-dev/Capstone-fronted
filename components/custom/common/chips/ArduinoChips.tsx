import React from "react";

interface ArduinoProps {
  icon: React.ReactNode;
  label?: string;
  value?: string | number;
}

const ArduinoChips: React.FC<ArduinoProps> = ({ icon, label, value }) => {
  return (
    <div className="border border-border bg-white dark:bg-[#1a1a1a] shadow-md rounded-lg p-6 flex  gap-6 w-fit ">
      <div className=" text-[3rem]  ">{icon}</div>

      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 flex items-center gap-2">
          {value}
        </h1>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

export default ArduinoChips;
