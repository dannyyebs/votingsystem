"use client";

import {
  votesAgainstBaah,
  votesAgainstEmmanuel,
  votesAgainstMartin,
  votesForBaah,
  votesForChristian,
  votesForEbenezer,
  votesForElfreda,
  votesForEmmanuel,
  votesForHerbert,
  votesForMartin,
} from "@/data/statistics";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
  
} from "recharts";

const electionData = [
  {
    name: "Chairperson",
    opta: votesForHerbert,
    optb: votesForEbenezer,
  },
  {
    name: "Vice Chairperson",
    opta: votesForEmmanuel,
    optb: votesAgainstEmmanuel,
  },
  {
    name: "Executive Member",
    opta: votesForElfreda,
    optb: votesForChristian,
  },
  {
    name: "Treasurer",
    opta: votesForMartin,
    optb: votesAgainstMartin,
  },
  {
    name: "Financial Secretary",
    opta: votesForBaah,
    optb: votesAgainstBaah,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={electionData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
