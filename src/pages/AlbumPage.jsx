import { useParams } from "react-router-dom";
import AlbumHeader from "../components/renderView/album/albumHeader/AlbumHeader";
import { useQuery } from "@tanstack/react-query";
import { getAlbum } from "../services/album";
import AlbumItems from "../components/renderView/album/albumItems/AlbumItems";

function AlbumPage() {
  const { albumId } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["album"],
    queryFn: () => getAlbum(albumId),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data && (
        <>
          <AlbumHeader data={data} />
          <AlbumItems data={data} />
        </>
      )}
    </>
  );
}
export default AlbumPage;
