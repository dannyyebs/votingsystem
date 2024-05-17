import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import VoteButton from "@/components/voteButton";
import db from "@/lib/db";
import { Dot, TriangleAlert } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const BallotPage = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="h-screen py-20 flex justify-center items-center">
      <Card className="p-4 flex flex-col gap-3">
        <CardTitle className="flex items-center gap-2 text-red-700">
          <TriangleAlert /> <p>Please note following</p>
        </CardTitle>
        <Separator />
        <CardDescription>
          Please read the following carefully and take note of them before you
          start voting
        </CardDescription>
        <CardContent>
          <ul>
            <li className="flex gap-1 items-center">
              <Dot size={24} />
              You can only vote onces
            </li>
            <li className="flex gap-1 items-center">
              <Dot size={24} />
              Please finish voting before you close the portal{" "}
            </li>
            <li className="flex gap-1 items-start">
              <Dot size={24} />
              Please note that after voting for an individual, you can not make
              changes{" "}
            </li>
          </ul>
        </CardContent>
        <CardFooter className="w-full flex flex-col items-center">
            <VoteButton />
        </CardFooter>
      </Card>
    </div>
  );
};

export default BallotPage;
