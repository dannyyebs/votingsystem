import { authOptions } from "@/utils/authOptions";
import SinglePosition from "./singlePosition";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const FinancialSecretaryPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <SinglePosition
        positionTitle="Financial Secretary"
        CandidateImage="/Rcandidates/emmanuel_k_m_baah.jpg"
        positionDescription="Please do you want the candidate below as PTA Financial Secretary?"
        CandidateName="Emmanuel M. K. Baah"
      />
    </div>
  );
};

export default FinancialSecretaryPage;
