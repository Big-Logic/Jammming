import { useQuery } from "@tanstack/react-query";
import { getArtistTopTracks } from "../../../../services/artist";
import ArtistTopTrack from "./ArtistTopTrack";
import { Cont } from "../../../reusable/Cont";
import ArtistTopsTracksHeader from "./ArtistTopsTracksHeader";

function ArtistTopTracks({ artistId }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["artisttoptracks"],
    queryFn: () => getArtistTopTracks(artistId),
  });

  return (
    <section>
      <Cont>
        {data && (
          <>
            <h2>Popular</h2>
            <ArtistTopsTracksHeader />
            {data.map((track, i) => (
              <ArtistTopTrack key={i} data={track} index={i + 1} />
            ))}
          </>
        )}
      </Cont>
    </section>
  );
}
export default ArtistTopTracks;
