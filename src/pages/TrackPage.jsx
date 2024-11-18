import { useParams } from "react-router-dom";
import TrackHeader from "../components/renderView/track/trackHeader/TrackHeader";
import { useQuery } from "@tanstack/react-query";
import { getTrack } from "../services/track";

function TrackPage() {
  const { trackId } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["track"],
    queryFn: () => getTrack(trackId),
    // refetchOnMount: true,
  });

  if (isPending) {
    console.log("pending");
    return <p>Loading...</p>;
  }

  return (
    <>
      {data && (
        <>
          <TrackHeader data={data} />
        </>
      )}
    </>
  );
}
export default TrackPage;
