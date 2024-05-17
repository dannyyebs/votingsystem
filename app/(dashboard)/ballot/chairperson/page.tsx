import { authOptions } from "@/utils/authOptions";
import MultipleCandidates from "./multiCandidates";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const ChairpersonVotePage = async () => {
  const session = await getServerSession(authOptions);
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

export default ChairpersonVotePage;
