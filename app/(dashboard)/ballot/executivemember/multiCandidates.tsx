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

import MultipleSingleCandidate from "./candidateCard";
import {  VoteForExecutiveMember } from "@/app/actions/voting/voting";

interface MultipleCandidatesProps {
  positionName: string;
  descriptionUnderPosition: string;
  candidateOneName: string;
  candidateTwoName: string;
  CandidateOneImagePath: string;
  candidateTwoImagePath: string;
}

const MultipleCandidates = (props: MultipleCandidatesProps) => {
  return (
    <div>
      <div className="flex flex-row justify-between w-full pt-16 lg:pt-0 pb-4">
        <Card className="w-full h-screen md:p-6 px-0 flex flex-col gap-4 items-center justify-center">
          <CardTitle className="flex text-center flex-row items-center justify-center">
            <div className="font-black uppercase md:text-4xl text-2xl">
              {props.positionName}
            </div>
          </CardTitle>
          <CardDescription className="flex flex-col items-center justify-center text-center">
            <span className="font-bold md:text-2xl text-md">
              {props.descriptionUnderPosition}
            </span>
          </CardDescription>
          <CardContent className="flex flex-col gap-4">
            {/* Executive Member Candidates*/}
            {/* Candidate 1 */}

            <MultipleSingleCandidate
              candidateImagePath={props.CandidateOneImagePath}
              candidateName={props.candidateOneName}
            />

            {/* Candidate 2 */}
            <MultipleSingleCandidate
              candidateImagePath={props.candidateTwoImagePath}
              candidateName={props.candidateTwoName}
            />
          </CardContent>
          <CardFooter>
            <form action={() => (VoteForExecutiveMember("skipped"))}>
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
