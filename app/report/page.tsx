import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import db from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const ReportPage = async () => {
  const session = await getServerSession();
  const userRole = session?.user.role;

  if (userRole === "user") {
    redirect("/");
  }
  // Getting candidtaes votes

  // CHAIRPERSON
  const votesForHerbert = await db.user.count({
    where: {
      chairperson: {
        contains: "Herbert",
      },
    },
  });

  const votesForDomey = await db.user.count({
    where: {
      chairperson: {
        contains: "Domey",
      },
    },
  });

  const votesForSkipC = await db.user.count({
    where: {
      chairperson: {
        contains: "skipped",
      },
    },
  });

  // VICE CHAIRPERSON

  const votesForVPYes = await db.user.count({
    where: {
      viceChairperson: {
        contains: "Emmanuel Mendel Dwamena",
      },
    },
  });

  const votesForVPNo = await db.user.count({
    where: {
      viceChairperson: {
        contains: "No",
      },
      AND: {
        hasVoted: {
          equals: true,
        },
      },
    },
  });

  // EXECUTIVE MEMBER

  const votesForElfreda = await db.user.count({
    where: {
      executiveMember: {
        contains: "Elfreda",
      },
    },
  });

  const votesForChristian = await db.user.count({
    where: {
      executiveMember: {
        contains: "Christian",
      },
    },
  });

  const votesForSkipE = await db.user.count({
    where: {
      executiveMember: {
        contains: "skipped",
      },
    },
  });

  // Treas
  const votesForTYes = await db.user.count({
    where: {
      treasurer: {
        contains: "Martin Nketsiah Koomson",
      },
    },
  });

  const votesForTNo = await db.user.count({
    where: {
      treasurer: {
        contains: "No",
      },
      AND: {
        hasVoted: {
          equals: true,
        },
      },
    },
  });


  
  // Finc
  const votesForFYes = await db.user.count({
    where: {
      financialSecretary: {
        contains: "Emmanuel M. K. Baah",
      },
    },
  });

  const votesForFNo = await db.user.count({
    where: {
      financialSecretary: {
        contains: "No",
      },
      AND: {
        hasVoted: {
          equals: true,
        },
      },
    },
  });
  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl">UNIVERSITY BASIC SCHOOL</h2>
        <h2 className="text-emerald-600 text-xl font-bold">
          PTA VOTING LIVE REPORT
        </h2>
      </div>
      <Separator orientation="horizontal" className="my-4" />
      <p className=" text-3xl font-black py-4">Chairperson</p>
      <div className="grid sm:grid-cols-3 gap-4 my-2">
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>REV. DR. HERBERT K.K GRAHAM</h3>
          <div className="flex flex-row font-black text-2xl gap-4 ">
            <div>{votesForHerbert}</div>
          </div>
        </div>
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>EBENEZER DOMEY</h3>
          <div className="flex font-black text-xl gap-4">
            <div>{votesForDomey}</div>
          </div>
        </div>
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>SKIPPED VOTES CHAIRPERSON</h3>
          <div className="flex font-black text-xl gap-4">
            <div>{13}</div>
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" className="my-4" />
      {/* Vice Presidents */}
      <p className=" text-3xl font-black py-4">Vice Chairperson</p>
      <div className="grid sm:grid-cols-2 gap-4 my-2">
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>Yes</h3>
          <div className="flex flex-row font-black text-2xl gap-4 ">
            <div>{votesForVPYes}</div>
          </div>
        </div>
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>No</h3>
          <div className="flex font-black text-xl gap-4">
            <div>{votesForVPNo}</div>
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" className="my-4" />

      {/* Exective */}

      <p className=" text-3xl font-black py-4">Executive Member</p>
      <div className="grid sm:grid-cols-3 gap-4 my-2">
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>ELFREDA ANKAI TAYLOR</h3>
          <div className="flex flex-row font-black text-2xl gap-4 ">
            <div>{votesForElfreda}</div>
          </div>
        </div>
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>CHRISTIAN KWAME ARTHUR-SARFO</h3>
          <div className="flex font-black text-xl gap-4">
            <div>{votesForChristian}</div>
          </div>
        </div>
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>SKIPPED VOTES - EXECUTIVE MEMBERS</h3>
          <div className="flex font-black text-xl gap-4">
            <div>{26}</div>
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" className="my-4" />

      {/* Treasurer */}
      <p className=" text-3xl font-black py-4">TREASURER</p>
      <div className="grid sm:grid-cols-2 gap-4 my-2">
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>Yes</h3>
          <div className="flex flex-row font-black text-2xl gap-4 ">
            <div>{votesForTYes}</div>
          </div>
        </div>
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>No</h3>
          <div className="flex font-black text-xl gap-4">
            <div>{votesForTNo}</div>
          </div>
        </div>
      </div>

      {/* Financial */}
      <Separator orientation="horizontal" className="my-4" />

      <p className=" text-3xl font-black py-4">FINANCIAL SECRETARY</p>
      <div className="grid sm:grid-cols-2 gap-4 my-2">
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>Yes</h3>
          <div className="flex flex-row font-black text-2xl gap-4 ">
            <div>{votesForFYes}</div>
          </div>
        </div>
        <div className="bg-gray-100 w-auto h-32 rounded-lg flex flex-col  items-center p-4">
          <h3>No</h3>
          <div className="flex font-black text-xl gap-4">
            <div>{votesForFNo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
