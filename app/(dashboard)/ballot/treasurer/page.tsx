import SinglePosition from "./singlePosition";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const TreasurePage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <SinglePosition
        positionTitle="Treasurer"
        CandidateImage="/Rcandidates/martin_nketsiah_koomson.jpg"
        positionDescription="Please do you want the candidate below as PTA Treasurer?"
        CandidateName="Martin Nketsiah Koomson"
      />
    </div>
  );
};

export default TreasurePage;
