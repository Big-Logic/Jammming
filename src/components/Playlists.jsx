import { useEffect, useState } from "react";

//Services
import { getMyPlaylists } from "../services/services";

//utils
import { destructurePlaylists } from "../utils/destructureHandlers";

//components
import { DashboardSection } from "./reusable/dashboardReusable";
import Playlist from "./Playlist";
import PlaylistHeader from "./PlaylistHeader";

function Playlists() {
  const [playlists, setPlaylists] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleAddToPlaylist(item) {
    setPlaylists((prev) => {
      return [item, ...prev];
    });
  }

  useEffect(function () {
    (async function () {
      setError(null);
      setIsLoading(true);
      try {
        const data = await getMyPlaylists();
        setIsLoading(false);
        setError(null);
        setPlaylists(destructurePlaylists(data));
      } catch (err) {
        setIsLoading(false);
        setError("An unexpected error occured!");
        console.log(err);
      }
    })();
  }, []);

  return (
    <DashboardSection>
      <PlaylistHeader addToPlaylist={handleAddToPlaylist} />
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        playlists &&
        playlists.map((playlist) => (
          <Playlist key={playlist.id} playListObj={playlist} />
        ))
      )}
    </DashboardSection>
  );
}
export default Playlists;
