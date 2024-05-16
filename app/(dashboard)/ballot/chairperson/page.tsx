import { VoteForChairperson } from "@/app/actions/voting/voting";
import MultipleCandidates from "./multiCandidates";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Poll1 = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  const candidateOneName = "Rev. Dr. Herbert K. K. Graham";
  const candidateOneImage = "/Rcandidates/revdrherbertkkgraham.jpg";

  const candidateTwoName = "Ebenezer Domey";
  const candidateTwoImage = "/Rcandidates/ebenezer_domey.jpg";

  return (
    <div>
      <MultipleCandidates
        positionName="Chairperson"
        descriptionUnderPosition="Please choose your favourite candidate"
        candidateOneName={candidateOneName}
        CandidateOneImagePath={candidateOneImage}
        candidateTwoName={candidateTwoName}
        candidateTwoImagePath={candidateTwoImage}
      />
    </div>
  );
};

export default Poll1;
