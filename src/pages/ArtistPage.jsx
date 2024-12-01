import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getArtist } from "../services/artist";
import ArtistHeader from "../components/renderView/artist/artistHeader/ArtistHeader";
import ArtistTopTracks from "../components/renderView/artist/artistTopTracks/ArtistTopTracks";
import ArtistAlbums from "../components/renderView/artist/artistAlbums/ArtistAlbums";
// import ArtistBgImage from "../components/renderView/artist/ArtistBgImage";

function ArtistPage() {
  const { artistId } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["artist"],
    queryFn: () => getArtist(artistId),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data && (
        <>
          {/* <ArtistBgImage data={data}></ArtistBgImage> */}
          <ArtistHeader data={data} />
          <ArtistTopTracks artistId={artistId} />
          <ArtistAlbums artistId={artistId} />
        </>
      )}
    </>
  );
}
export default ArtistPage;
