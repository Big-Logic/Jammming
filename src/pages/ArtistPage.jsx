import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getArtist } from "../services/artist";
import ArtistHeader from "../components/renderView/artist/artistHeader/ArtistHeader";

function ArtistPage() {
  const { artistId } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["artist"],
    queryFn: () => getArtist(artistId),
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
          <ArtistHeader data={data} />
        </>
      )}
    </>
  );
}
export default ArtistPage;
