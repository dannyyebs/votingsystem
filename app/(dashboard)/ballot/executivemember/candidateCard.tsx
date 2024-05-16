import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { VoteForExecutiveMember } from "@/app/actions/voting/voting";

interface MultipleSingleCandidateProps {
  candidateImagePath: string;
  candidateName: string;
}

const MultipleSingleCandidate = (props: MultipleSingleCandidateProps) => {
  return (
    <div>
      <div className="bg-muted flex justify-between items-center p-4 rounded-xl ">
        <Image
          src={props.candidateImagePath}
          alt={props.candidateName}
          width={160}
          height={160}
          className="rounded-xl w-36 h-36"
        />
        <p className="font-bold text-2xl px-4">{props.candidateName} </p>

        {/* from */}

        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"}>Vote</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Confirm your vote</DialogTitle>
              <DialogDescription>
                Are you sure you want to vote for{" "}
                <span className="font-bold text-primary">
                  {props.candidateName}
                </span>{" "}
                as your next {" "}
                <span className="font-bold text-primary">
                  Executive Member?
                </span>
                ?
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2 bg-muted p-2 rounded-xl">
              <Image
                src={props.candidateImagePath}
                alt={props.candidateName}
                width={160}
                height={160}
                className="rounded-xl w-40 h-40 "
              />
              <p className="font-bold text-xl">{props.candidateName}</p>
            </div>
            <DialogFooter className="w-full flex-row justify-between gap-x-4 items-center">
             
              {/* TODO: CHECK THE VOTE FUNCTION */}
              <form action={() => VoteForExecutiveMember(props.candidateName)} className="w-full">
                <Button
                  type="submit"
                  className="w-full flex gap-4 items-center"
                >
                  <ThumbsUp className="w-4 h-4" />
                  Confirm
                </Button>
              </form>
              <DialogClose asChild className="w-full flex gap-4 items-center">
                <Button type="button" variant="destructive">
                  <ThumbsDown className="w-4 h-4" />
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* end */}
      </div>
    </div>
  );
};

export default MultipleSingleCandidate;
