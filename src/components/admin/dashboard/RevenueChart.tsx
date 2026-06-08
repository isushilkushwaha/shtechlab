"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 25000 },
  { month: "Apr", revenue: 32000 },
  { month: "May", revenue: 45000 },
  { month: "Jun", revenue: 55000 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">

      <h3 className="mb-5 font-semibold">
        Revenue Trend
      </h3>

      <div className="h-[320px]">

        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}