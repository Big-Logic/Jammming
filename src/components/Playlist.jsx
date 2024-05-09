import { useEffect, useState } from "react";
import Track from "./Track";

function Playlist({ playList, setPlayList }) {
  const [playlistName, setPlaylistName] = useState("");
  function handleRemoveFromPlaylist(id) {
    setPlayList((prev) => prev.filter((ele) => ele.id !== id));
  }

  async function handleSaveButtonClick() {
    if (playList.length < 1) return;
    if (!playlistName) return alert("Playlist name cannot be empty!");
    const playlistToSave = playList.map((pl) => pl.uri);
    console.log(playlistToSave);
  }

  useEffect(function () {}, [playList]);
  return (
    <section>
      <header>
        <h2>Playlist</h2>
      </header>
      <div>
        <input
          type="text"
          onChange={(e) => setPlaylistName(e.target.value)}
          value={playlistName}
        />
      </div>
      <div>
        {playList.map((result) => (
          <Track name={result.name} album={result.album} key={result.id}>
            <button onClick={() => handleRemoveFromPlaylist(result.id)}>
              Remove from Playlist
            </button>
          </Track>
        ))}
      </div>
      {playList.length > 0 && (
        <button onClick={handleSaveButtonClick}>Save to Spotify</button>
      )}
    </section>
  );
}
export default Playlist;
