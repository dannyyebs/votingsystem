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
import {  ThumbsUp, X } from "lucide-react";
import { VoteForChairperson } from "@/app/actions/voting/voting";

interface MultipleSingleCandidateProps {
  candidateImagePath: string;
  candidateName: string;
}

const MultipleSingleCandidate = (props: MultipleSingleCandidateProps) => {
  return (
    <div>
      <div className="bg-muted flex justify-between items-center md:p-4 px-1 py-2  rounded-xl">
        <Image
          src={props.candidateImagePath}
          alt={props.candidateName}
          width={160}
          height={160}
          className="rounded-md md:rounded-xl md:w-36 md:h-36 w-20 h-20"
        />
        <p className="font-bold text-sm md:text-2xl px-4">{props.candidateName} </p>

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
                as your{" "}
                <span className="font-bold text-primary">PTA Chairperson?</span>?
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2 bg-muted p-2 rounded-xl">
              <Image
                src={props.candidateImagePath}
                alt={props.candidateName}
                width={160}
                height={160}
                className="rounded-xl w-20 h-20 md:w-36 md:h-36"
              />
              <p className="font-bold md:text-xl text-sm">{props.candidateName}</p>
            </div>
            <DialogFooter className="w-full flex flex-row gap-4 justify-between items-center">
              <DialogClose asChild className="w-full flex gap-4 items-center">
                <Button type="button" variant="destructive">
                  <X className="w-4 h-4" />
                  Cancel
                </Button>
              </DialogClose>
              {/* TODO: CHECK THE VOTE FUNCTION */}
              <form
                action={() => VoteForChairperson(props.candidateName)}
                className="w-full "
              >
                <Button type="submit" className="w-full items-center gap-4">
                  <ThumbsUp className="w-4 h-4" />
                  Confirm
                </Button>
              </form>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* end */}
      </div>
    </div>
  );
};

export default MultipleSingleCandidate;
