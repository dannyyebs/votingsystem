import { getVotingStatus } from "@/app/actions/getInfoFromDB";

const ResultsPage = async () => {
  const votingStatus = await getVotingStatus();
  return (
    <div className="lg:mt-2 mt-16">
      {(votingStatus?.viewResultsStatus === false) ? (
        <div className="w-full h-screen flex justify-center items-center">
          <p className="font-bold">
            Results will be available after the election
          </p>
        </div>
      ) : (
        <div>Chart here</div>
      )}
    </div>
  );
};

export default ResultsPage;
