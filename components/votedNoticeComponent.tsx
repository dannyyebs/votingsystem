import React from "react";
import { Card } from "./ui/card";
import { TriangleAlert } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface VotedNoticeComponentProps {
  link: string;
  positionName: string;
  buttonLabel?: string; // Change the type to string
}

export const VotedNoticeComponent: React.FC<VotedNoticeComponentProps> = ({
  link,
  positionName,
  buttonLabel = "Next Position", // Set default value here
}) => {
  return (
    <Card className="h-screen flex flex-col justify-center items-center gap-4 p-4">
      <TriangleAlert className="w-24 h-24 text-destructive" />
      <p className="font-bold text-xl text-center">
        You have voted <span>{positionName}</span> position already
      </p>
      <Link href={link}>
        <Button>{buttonLabel}</Button>
      </Link>
    </Card>
  );
};