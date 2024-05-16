"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

import { Button } from "@/components/ui/button";

import MultipleSingleCandidate from "./multipleSingleCandidate";
import { Link } from "lucide-react";

interface MultipleCandidatesProps {
  positionName: string;
  descriptionUnderPosition: string;
  candidateOneName: string;
  candidateTwoName: string;
  CandidateOneImagePath: string;
  candidateTwoImagePath: string;
  skipPositionFunction: any;
  voteCandidateOneFunction: any;
  VoteCandidateTwoFunction: any;
}

const MultipleCandidates = (props: MultipleCandidatesProps) => {
  return (
    <div>
      <div className="flex flex-row justify-between w-full pt-16 lg:pt-0 pb-4">
        <Card className="w-full h-screen p-6 flex flex-col gap-4 items-center justify-center">
          <CardTitle className="flex text-center flex-row items-center justify-center">
            <div className="font-black uppercase text-4xl">
              {props.positionName}
            </div>
          </CardTitle>
          <CardDescription className="flex flex-col items-center justify-center">
            <span className="font-bold text-2xl">
              {props.descriptionUnderPosition}
            </span>
          </CardDescription>
          <CardContent className="flex flex-col gap-4">
            {/* Chairpersons Candidates*/}
            {/* Candidate 1 */}

            <MultipleSingleCandidate
              candidateImagePath={props.CandidateOneImagePath}
              candidateName={props.candidateOneName}
              candidateAction={props.voteCandidateOneFunction}
            />

            {/* Candidate 2 */}
            <MultipleSingleCandidate
              candidateImagePath={props.candidateTwoImagePath}
              candidateName={props.candidateTwoName}
              candidateAction={props.VoteCandidateTwoFunction}
            />
          </CardContent>
          <CardFooter>
            <form action={()=> console.log(props.skipPositionFunction)}>
              <Button variant={"outline"} type="submit">
               Skip
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MultipleCandidates;
