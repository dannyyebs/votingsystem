import { CircleHelp, HomeIcon, ThumbsUp, User } from "lucide-react";

export const navLinks = [
    {
      label: "Home",
      route: "/",
      icon: HomeIcon,
    },
    {
      label: "My Ballot",
      route: "/ballot",
      icon: ThumbsUp,
    },
    
    {
      label: "Candidates",
      route: "/candidates",
      icon: User ,
    },
  
    {
      label: "Help & Support",
      route: "/help",
      icon: CircleHelp,
    },
  ];
  