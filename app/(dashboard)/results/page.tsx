import BarChartComponent from "@/components/barchart";
import { votesAgainstBaah, votesForHerbert } from "@/data/statistics";
import React from "react";

const ResultsPage = () => {
  // const votesHerbert = await votesForHerbert()
  return (
    <div className="lg:mt-2 mt-16">
      <div className="w-full h-screen flex justify-center items-center">
        <p className="font-bold">
          Results will be available after the election
        </p>
      </div>
      {/* <BarChartComponent /> */}
      {/* <p>{ votesHerbert }</p> */}
    </div>
  );
};

export default ResultsPage;
