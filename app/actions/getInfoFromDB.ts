"use server";
import { getServerSession } from "next-auth";
import db from "@/lib/db";
import { authOptions } from "@/utils/authOptions";
import { settingsID } from "@/data/const_id";

// Geting user vote status from DB

interface UserData {
  hasVoted: boolean;
  chairperson: string;
  viceChairperson: string;
  executiveMember: string;
  treasurer: string;
  financialSecretary: string;

  // Add other fields as needed
}

interface SettingsData {
  electionStatus:    Boolean
  viewResultsStatus: Boolean
  electionStartDate: String
  electionEndDate:   String 
}

export async function getUserData(): Promise<UserData | null> {
  const userSession = await getServerSession(authOptions);
  const sessionPhone = userSession?.user.phonenumber;
  try {
    const userData = await db.user.findUnique({
      where: {
        phonenumber: sessionPhone,
      },
      select: {
        hasVoted: true,
        chairperson: true,
        viceChairperson: true,
        executiveMember: true,
        treasurer: true,
        financialSecretary: true,
        // Add other fields as needed
      },
    });

    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export async function getVotingStatus(): Promise<SettingsData | null> {
  const settingsIDfromDB = settingsID;
  try {
    const userData = await db.systemsettings.findUnique({
      where: {
        id: settingsIDfromDB,
      },
      select: {
        electionStatus: true,
        viewResultsStatus: true,
        electionStartDate: true,
        electionEndDate: true,
      },
    });

    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}
