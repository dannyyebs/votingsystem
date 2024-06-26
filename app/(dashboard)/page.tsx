import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import db from "@/lib/db";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getUserData, getVotingStatus } from "../actions/getInfoFromDB";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  const totalvoters = await db.user.count();
  const totalvoted = await db.user.count({
    where: {
      hasVoted: true,
    },
  });

  const user = session.user.phonenumber;

  const userData = await getUserData();
  const settingsData = await getVotingStatus();

  return (
    <div>
      {/* Header */}
      <div className=" items-center md:flex flex-row justify-between w-full pt-16 lg:pt-0 ">
        <h2 className="font-bold text-xl lg:text-2xl text-center">
          WELCOME:{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            {user}
          </span>
        </h2>
      </div>
      <div>
        {settingsData?.electionStatus ? (
          <div className="flex items-center gap-2 md:justify-end justify-center  w-full m-2">
            <div className="rounded-full w-4 h-4 bg-green-500 shadow-xl shadow-green-500"></div>
            <div className="text-sm font-bold">Voting is Live</div>
          </div>
        ) : (
          <div className="flex items-center gap-2 md:justify-end justify-center  w-full m-2">
            <div className="rounded-full w-4 h-4 bg-orange-500 shadow-xl shadow-green-500"></div>
            <div className="text-sm font-bold">Voting Starts: 7:00 AM</div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2 py-4">
        <Card className="p-4 ">
          <p className="text-4xl font-black ">{totalvoters}</p>
          <p className="text-sm text-gray-500">Qualified Votes</p>
        </Card>
        <Card className="p-4 ">
          <p className="text-4xl font-black ">{totalvoted}</p>
          <p className="text-sm text-gray-500">Votes Cast</p>
        </Card>
        <Card className="p-4 ">
          <p className="text-4xl font-black ">{totalvoters - totalvoted}</p>
          <p className="text-sm text-gray-500">Remaining Votes</p>
        </Card>
      </div>

      <div>
        {userData?.hasVoted ? (
          <div className="flex justify-center gap-x-4">
            <Button className="w-30" disabled>
              Already voted
            </Button>
            <Button className="w-30" variant="outline">
              <Link href="/report">View Results</Link>
            </Button>
          </div>
        ) : (
          <div className="flex justify-center gap-x-4">
            <Link href="/ballot">
              <Button className="w-72">Vote Now</Button>
            </Link>
          </div>
        )}
      </div>
      {/*Notification Section */}
      {/* <p className="font-thin pt-2">Notifications</p> */}
      {/* 
      {notification.map((notification) => (
        <Card key={notification.id} className="mb-4">
          <CardHeader>
            <CardTitle>{notification.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{notification.description}</p>
          </CardContent>
          <CardFooter>
            <Button>
              <Link href={notification.btn_url}>{notification.btn_title}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))} */}
    </div>
  );
};

export default HomePage;
