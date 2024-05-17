"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ThumbsUp, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VoteForTreasurer } from "@/app/actions/voting/voting";

interface SinglePositionProps {
  positionTitle: string;
  positionDescription: string;
  CandidateName: string;
  CandidateImage: string;
}

const SinglePosition = (props: SinglePositionProps) => {
  return (
    <div>
      <div className="flex flex-row justify-between w-full pt-16 lg:pt-0 pb-4">
        <Card className="w-full h-screen p-6 flex flex-col gap-4 items-center justify-center">
          <CardTitle className="flex text-center flex-row items-center justify-center">
            <div className="font-black uppercase text-3xl">
              {props.positionTitle}
            </div>
          </CardTitle>
          <CardDescription className="flex flex-col items-center justify-center">
            <span className="font-bold text-xl text-center w-auto">
              {props.positionDescription}
            </span>
          </CardDescription>
          <CardContent className="flex flex-col gap-4">
            {/* Single Candidate */}
            <div className="bg-muted flex flex-col gap-4 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <Image
                  src={props.CandidateImage}
                  alt={props.CandidateName}
                  width={160}
                  height={160}
                  className="rounded-xl w-36 h-36"
                />
                <p className="font-bold text-2xl px-4">{props.CandidateName}</p>
              </div>

              {/* from */}
              <div className="flex w-full flex-row items-center justify-center gap-4">
                {/* No Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size={"lg"}
                      variant="destructive"
                      className="w-full"
                    >
                      No
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Confirm your vote</DialogTitle>
                      <DialogDescription>
                        Are you sure you{" "}
                        <span className="font-bold text-red-700">do not</span>{" "}
                        prefer{" "}
                        <span className="font-bold text-primary">
                          {props.CandidateName}
                        </span>{" "}
                        as the{" "}
                        <span className="font-bold text-primary">
                          PTA {props.positionTitle}
                        </span>
                        ?
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2 bg-muted p-2 rounded-xl">
                      <Image
                        src={props.CandidateImage}
                        alt={props.CandidateName}
                        width={160}
                        height={160}
                        className="rounded-xl w-36 h-36"
                      />
                      <p className="font-bold text-xl">{props.CandidateName}</p>
                    </div>
                    <div className="w-full flex justify-between gap-4 items-center">
                      <DialogClose
                        asChild
                        className="w-full flex gap-4 items-center"
                      >
                        <Button type="button" variant="destructive">
                          <X className="w-4 h-4" />
                          Cancel
                        </Button>
                      </DialogClose>
                      {/* TODO: NO VOTE */}
                      <form
                        action={() => VoteForTreasurer("No")}
                        className="w-full"
                      >
                        <Button type="submit" className="w-full flex gap-4 items-center">
                          <ThumbsUp className="w-4 h-4" />
                          Confirm
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Yes Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size={"lg"} className="w-full">
                      Yes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Confirm your vote</DialogTitle>
                      <DialogDescription>
                        Are you sure you{" "}
                        <span className="font-bold text-blue-700">prefer</span>{" "}
                        <span className="font-bold text-primary">
                          {props.CandidateName}
                        </span>{" "}
                        as the{" "}
                        <span className="font-bold text-primary">
                          PTA {props.positionTitle}
                        </span>
                        ?
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2 bg-muted p-2 rounded-xl">
                      <Image
                        src={props.CandidateImage}
                        alt={props.CandidateName}
                        width={160}
                        height={160}
                        className="rounded-xl w-36 h-36"
                      />
                      <p className="font-bold text-xl">{props.CandidateName}</p>
                    </div>
                    <div className="w-full flex justify-between gap-4 items-center">
                      <DialogClose
                        asChild
                        className="w-full flex gap-4 items-center"
                      >
                        <Button type="button" variant="destructive">
                          <X className="w-4 h-4" />
                          Cancel
                        </Button>
                      </DialogClose>
                      {/* TODO: YES VOTE */}
                      <form
                        action={() =>
                          VoteForTreasurer("Martin Nketsiah Koomson")
                        }
                        className="w-full"
                      >
                        <Button type="submit" className="w-full flex gap-4 items-center">
                          <ThumbsUp className="w-4 h-4" />
                          Confirm
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* end */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SinglePosition;
