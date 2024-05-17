"use server";
import db from "@/lib/db";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function VoteForChairperson(candidateName: string) {
  const session = await getServerSession(authOptions);
  const userPhoneNumber = session?.user.phonenumber;
  await db.user.update({
    where: {
      phonenumber: userPhoneNumber,
    },
    data: {
      chairperson: candidateName,
    },
  });
  console.log("Favourite Chairperson Chosen");

  revalidatePath("/");
  redirect("/ballot/vicechairperson");
}

export async function VoteForViceChairperson(candidateName: string) {
  const session = await getServerSession(authOptions);
  const userPhoneNumber = session?.user.phonenumber;
  await db.user.update({
    where: {
      phonenumber: userPhoneNumber,
    },
    data: {
      viceChairperson: candidateName,
    },
  });
  console.log("Favourite Vice Chairperson Chosen");

  revalidatePath("/");
  redirect("/ballot/executivemember");
}

export async function VoteForExecutiveMember(candidateName: string) {
  const session = await getServerSession(authOptions);
  const userPhoneNumber = session?.user.phonenumber;
  await db.user.update({
    where: {
      phonenumber: userPhoneNumber,
    },
    data: {
      executiveMember: candidateName,
    },
  });
  console.log("Favourite Executive Member Chosen");

  revalidatePath("/"), redirect("/ballot/treasurer");
}

export async function VoteForTreasurer(candidateName: string) {
  const session = await getServerSession(authOptions);
  const userPhoneNumber = session?.user.phonenumber;
  await db.user.update({
    where: {
      phonenumber: userPhoneNumber,
    },
    data: {
      treasurer: candidateName,
    },
  });
  console.log("Favourite Treasurer Chosen");

  revalidatePath("/");
  redirect("/ballot/financialsecretary");
}

export async function VoteForFinancialSecretary(candidateName: string) {
  const session = await getServerSession(authOptions);
  const userPhoneNumber = session?.user.phonenumber;
  await db.user.update({
    where: {
      phonenumber: userPhoneNumber,
    },
    data: {
      financialSecretary: candidateName,
    },
  });

  // await db.user.update({
  //   where: {
  //     phonenumber: userPhoneNumber,
  //   },
  //   data: {
  //     hasVoted: true,
  //   },
  // });
  console.log("Favourite financial Secretary Chosen");
  // console.log("Marked as Voted");

  revalidatePath("/");
  redirect("/");
}



export async function StartVote() {
  const session = await getServerSession(authOptions);
  const userPhoneNumber = session?.user.phonenumber;
  await db.user.update({
    where: {
      phonenumber: userPhoneNumber,
    },
    data: {
      hasVoted: true,
    },
  });

  // await db.user.update({
  //   where: {
  //     phonenumber: userPhoneNumber,
  //   },
  //   data: {
  //     hasVoted: true,
  //   },
  // });
  console.log("Has Started Voting");
  // console.log("Marked as Voted");

  revalidatePath("/");
  redirect("/ballot/chairperson");
}
