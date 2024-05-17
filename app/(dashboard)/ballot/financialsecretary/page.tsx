import { authOptions } from "@/utils/authOptions";
import SinglePosition from "./singlePosition";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { VotedNoticeComponent } from "@/components/votedNoticeComponent";
import { getUserData } from "@/app/actions/getInfoFromDB";

const FinancialSecretaryPage = async () => {
  const session = await getServerSession(authOptions);
  const userData = await getUserData()
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      {(userData?.financialSecretary === "Not Voted")?
      <SinglePosition
        positionTitle="Financial Secretary"
        CandidateImage="/Rcandidates/emmanuel_k_m_baah.jpg"
        positionDescription="Please do you want the candidate below as PTA Financial Secretary?"
        CandidateName="Emmanuel M. K. Baah"
      />:
       <VotedNoticeComponent
          link="http://localhost:3000/"
          positionName="Financial Secretary"
          buttonLabel="Go home"
        />}
    </div>
  );
};

export default FinancialSecretaryPage;
