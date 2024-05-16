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

  const candidateOneName = "Elfreda Ankai-Taylor";
  const candidateOneImage = "/Rcandidates/elfreda_ankai_taylor.jpg"

  const candidateTwoName = "Christian Kwame Arthur-Sarfo";
  const candidateTwoImage = "/Rcandidates/christiankwamearthursarfo.jpg"

  

  return (
    <div>
      <MultipleCandidates
        positionName="Executive Member"
        descriptionUnderPosition="Please choose your favourite candidate"
        candidateOneName={candidateOneName}
        CandidateOneImagePath={candidateOneImage}
        voteCandidateOneFunction={(VoteForChairperson(candidateOneName))}
        candidateTwoName={candidateTwoName}
        candidateTwoImagePath={candidateTwoImage}
        VoteCandidateTwoFunction={ (VoteForChairperson(candidateTwoName))}
        skipPositionFunction={ (VoteForChairperson("Skip"))}
      />
    </div>
  );
};

export default Poll1;
