import { authOptions } from "@/utils/authOptions";
import SinglePosition from "./singlePosition";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { getUserData } from "@/app/actions/getInfoFromDB";
import { VotedNoticeComponent } from "@/components/votedNoticeComponent";

const TreasurePage = async () => {
  const session = await getServerSession(authOptions);
  const userData = await getUserData();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      {userData?.treasurer === "Not Voted" ? (
        <SinglePosition
          positionTitle="Treasurer"
          CandidateImage="/Rcandidates/martin_nketsiah_koomson.jpg"
          positionDescription="Please do you want the candidate below as PTA Treasurer?"
          CandidateName="Martin Nketsiah Koomson"
        />
      ) : (
        <VotedNoticeComponent
          link="/ballot/financialsecretary"
          positionName="Treasurer"
        />
      )}
    </div>
  );
};

export default TreasurePage;
