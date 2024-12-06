import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RealTimeChart = ({
  updates,
}: {
  updates: { time: string; voc: string }[];
}) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(Number(timestamp));
    return `${date.getHours()}:${String(date.getMinutes()).padStart(
      2,
      "0"
    )}:${String(date.getSeconds()).padStart(2, "0")}`;
  };

  const chartData =
    updates?.map((update) => ({
      time: formatTime(update.time),
      voc: Number(update.voc),
    })) || [];

  if (chartData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid stroke="hsl(var(--border))" />
          <XAxis
            dataKey="time"
            tick={{ fill: "hsl(var(--foreground))" }}
            tickLine={{ stroke: "hsl(var(--border))", strokeWidth: 0.5 }}
            interval="preserveStartEnd"
            tickFormatter={(tick, index) =>
              index % Math.ceil(chartData.length / 6) === 0 ? tick : ""
            }
            // angle={-45}
            textAnchor="end"
          />
          <YAxis
            tick={{ fill: "hsl(var(--foreground))" }}
            tickLine={{ stroke: "hsl(var(--border))", strokeWidth: 0.5 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
            }}
          />
          <Line
            type="monotone"
            dataKey="voc"
            stroke="hsl(var(--chart-1))"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealTimeChart;
