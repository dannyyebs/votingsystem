import { authOptions } from "@/utils/authOptions";
import SinglePosition from "./singlePosition";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { getUserData } from "@/app/actions/getInfoFromDB";
import { VotedNoticeComponent } from "@/components/votedNoticeComponent";

const ViceChairperson = async () => {
  const session = await getServerSession(authOptions);
  const userData = await getUserData()
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      {(userData?.viceChairperson === "Not Voted") ?
      <SinglePosition
        positionTitle="Vice Chairperson"
        CandidateImage="/Rcandidates/emmanuel_mendel_dwamena.jpg"
        positionDescription="Please do you want the candidate below as PTA Vice Chairperson?"
        CandidateName="Emmanuel Mendel Dwamena"
      /> : 
      (
        <VotedNoticeComponent 
        link="http://localhost:3000/ballot/executivemember"
        positionName="Vice Chairperson"

        />
      )}
    </div>
  );
};

export default ViceChairperson;
