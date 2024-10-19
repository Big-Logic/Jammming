import { useEffect, useState } from "react";

//Services
import { getMyPlaylists } from "../services/services";

//utils
import { destructurePlaylists } from "../utils/destructureHandlers";

//components
import { DashboardSection } from "../components/reusable/dashboardReusable";
import PlaylistHeader from "../components/playlists/PlaylistHeader";
import Playlist from "../components/playlists/Playlist";

function Playlists() {
  const [playlists, setPlaylists] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleAddToPlaylist(item) {
    setPlaylists((prev) => {
      return [item, ...prev];
    });
  }

  function handleDeletePlaylist(playlistId) {
    setPlaylists((prev) => {
      return prev.filter((item) => item.id !== playlistId);
    });
  }
  function handleUpdatePlaylist(playlistId) {
    setPlaylists((prev) => {
      return prev.filter((item) => item.id !== playlistId);
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
          <Playlist
            key={playlist.id}
            playListObj={playlist}
            handleDeletePlaylist={handleDeletePlaylist}
            handleUpdatePlaylist={handleUpdatePlaylist}
          />
        ))
      )}
    </DashboardSection>
  );
}
export default Playlists;
