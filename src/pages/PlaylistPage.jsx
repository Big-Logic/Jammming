import { useParams } from "react-router-dom";
import { getPlaylistItems } from "../services/playlists";
import { useQuery } from "@tanstack/react-query";
import PlaylistHeader from "../components/renderView/playlist/playlistHeader/PlaylistHeader";
import PlaylistItems from "../components/renderView/playlist/playlistItems/PlaylistItems";

function PlaylistPage() {
  const { playlistId } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["playlist"],
    queryFn: () => getPlaylistItems(playlistId),
  });

  return (
    <>
      {data && (
        <>
          <PlaylistHeader data={data} />
          <PlaylistItems data={data} />
        </>
      )}
    </>
  );
}
export default PlaylistPage;
