import Track from "./Track";

function Tracklist({ searchResults, playList, setPlayList }) {
  function handleAddToPlaylist(id) {
    if (playList.find((ele) => ele.id === id)) {
      return;
    }
    setPlayList((prev) =>
      prev.concat(searchResults.find((ele) => ele.id === id))
    );
  }
  return (
    <div>
      {searchResults.map((result) => (
        <Track name={result.name} album={result.album} key={result.id}>
          <button onClick={() => handleAddToPlaylist(result.id)}>
            Add to Playlist
          </button>
        </Track>
      ))}
    </div>
  );
}
export default Tracklist;
