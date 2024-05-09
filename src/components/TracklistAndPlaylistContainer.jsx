import { useState } from "react";
import Playlist from "./Playlist";
import SearchResults from "./SearchResults";

function TracklistAndPlaylistContainer({ searchResults }) {
  const [playList, setPlayList] = useState([]);
  return (
    <section>
      <SearchResults
        searchResults={searchResults}
        playList={playList}
        setPlayList={setPlayList}
      />
      <Playlist playList={playList} setPlayList={setPlayList} />
    </section>
  );
}
export default TracklistAndPlaylistContainer;
