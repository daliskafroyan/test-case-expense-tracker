import React from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { month: "jan", amount: 10000 },
  { month: "feb", amount: 90000 },
  { month: "mar", amount: 39182 },
  { month: "apr", amount: 39182 },
  { month: "may", amount: 39182 },
  { month: "jun", amount: 39182 },
  { month: "jul", amount: 94845 },
  { month: "agu", amount: 39182 },
  { month: "sep", amount: 63456 },
  { month: "okt", amount: 39182 },
  { month: "nov", amount: 6346 },
  { month: "des", amount: 39182 },
];

const Chart = () => {
  return (
    <>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="2 3" />
          <XAxis dataKey="month" />
          <YAxis></YAxis>
          <Tooltip />

          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
