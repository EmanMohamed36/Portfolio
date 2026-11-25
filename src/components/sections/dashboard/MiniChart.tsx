"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 28 },
  { month: "Feb", revenue: 35 },
  { month: "Mar", revenue: 41 },
  { month: "Apr", revenue: 46 },
  { month: "May", revenue: 58 },
  { month: "Jun", revenue: 72 },
];

export default function MiniChart() {
  return (
    <div className="mt-8 h-44 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="gradientRevenue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.45} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#64748b", fontSize: 12 }}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
            fill="url(#gradientRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}