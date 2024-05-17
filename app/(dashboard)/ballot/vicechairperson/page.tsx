import { authOptions } from "@/utils/authOptions";
import SinglePosition from "./singlePosition";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const ViceChairperson = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <SinglePosition
        positionTitle="Vice Chairperson"
        CandidateImage="/Rcandidates/emmanuel_mendel_dwamena.jpg"
        positionDescription="Please do you want the candidate below as PTA Vice Chairperson?"
        CandidateName="Emmanuel Mendel Dwamena"
      />
    </div>
  );
};

export default ViceChairperson;
