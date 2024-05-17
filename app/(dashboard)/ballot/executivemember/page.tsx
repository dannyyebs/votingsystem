import MultipleCandidates from "./multiCandidates";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "@/utils/authOptions";
import { getUserData } from "@/app/actions/getInfoFromDB";
import { VotedNoticeComponent } from "@/components/votedNoticeComponent";

const ExecutiveMember = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const userData = await getUserData();

  const candidateOneName = "Elfreda Ankai-Taylor";
  const candidateOneImage = "/Rcandidates/elfreda_ankai_taylor.jpg";

  const candidateTwoName = "Christian Kwame Arthur-Sarfo";
  const candidateTwoImage = "/Rcandidates/christiankwamearthursarfo.jpg";

  return (
    <div>
      {userData?.executiveMember === "Not Voted" ? (
        <MultipleCandidates
          positionName="Executive Member"
          descriptionUnderPosition="Please choose your favourite candidate"
          candidateOneName={candidateOneName}
          CandidateOneImagePath={candidateOneImage}
          candidateTwoName={candidateTwoName}
          candidateTwoImagePath={candidateTwoImage}
        />
      ) : (
        <VotedNoticeComponent
          link="http://localhost:3000/ballot/treasurer"
          positionName="Executive Member"
        />
      )}
    </div>
  );
};

export default ExecutiveMember;
