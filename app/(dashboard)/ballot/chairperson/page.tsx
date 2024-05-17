import { authOptions } from "@/utils/authOptions";
import MultipleCandidates from "./multiCandidates";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { getUserData } from "@/app/actions/getInfoFromDB";
import { Card } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VotedNoticeComponent } from "@/components/votedNoticeComponent";

const ChairpersonVotePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const userData = await getUserData();

  const candidateOneName = "Rev. Dr. Herbert K. K. Graham";
  const candidateOneImage = "/Rcandidates/revdrherbertkkgraham.jpg";

  const candidateTwoName = "Ebenezer Domey";
  const candidateTwoImage = "/Rcandidates/ebenezer_domey.jpg";

  return (
    <div>
      {userData?.chairperson === "Not Voted" ? (
        <MultipleCandidates
          positionName="Chairperson"
          descriptionUnderPosition="Please choose your favourite candidate"
          candidateOneName={candidateOneName}
          CandidateOneImagePath={candidateOneImage}
          candidateTwoName={candidateTwoName}
          candidateTwoImagePath={candidateTwoImage}
        />
      ) : (
       <VotedNoticeComponent 
        link="http://localhost:3000/ballot/vicechairperson"
        positionName="Chairperson"
       />
      )}
    </div>
  );
};

export default ChairpersonVotePage;
