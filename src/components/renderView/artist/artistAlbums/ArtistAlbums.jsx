import { useQuery } from "@tanstack/react-query";
import { Cont } from "../../../reusable/Cont";
import { getArtistAlbum } from "../../../../services/album";
import ArtistAlbum from "./ArtistAlbum";

function ArtistAlbums({ artistId }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["artistalbums"],
    queryFn: () => getArtistAlbum(artistId),
  });

  return (
    <section>
      <Cont>
        {data && (
          <>
            <h2>Albums</h2>
            {data.map((dt, i) => (
              <ArtistAlbum key={i} data={dt} index={i + 1} />
            ))}
          </>
        )}
      </Cont>
    </section>
  );
}
export default ArtistAlbums;
