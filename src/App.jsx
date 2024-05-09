import { useState } from "react";
import SearchBar from "./components/SearchBar";
import TracklistAndPlaylistContainer from "./components/TracklistAndPlaylistContainer";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: "128rd",
      name: "IDK",
      artist: "Logic",
      album: "Global boy",
      uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
    },
    {
      id: "188rd",
      name: "Unavailable",
      artist: "Davido",
      album: "Timeless",
      uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
    },
  ]);
  return (
    <main>
      <header>
        <h1>My Spotify</h1>
      </header>
      <div>
        <SearchBar setSearchResults={setSearchResults} />
        <TracklistAndPlaylistContainer searchResults={searchResults} />
      </div>
    </main>
  );
}
export default App;
