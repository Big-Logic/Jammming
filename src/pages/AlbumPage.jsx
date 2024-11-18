import { useParams } from "react-router-dom";
import AlbumHeader from "../components/renderView/album/albumHeader/AlbumHeader";
import { useQuery } from "@tanstack/react-query";
import { getAlbum } from "../services/album";

function AlbumPage() {
  const { albumId } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["album"],
    queryFn: () => getAlbum(albumId),
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
          <AlbumHeader data={data} />
        </>
      )}
    </>
  );
}
export default AlbumPage;
