import Tracklist from "./Tracklist";

function SearchResults({ searchResults, playList, setPlayList }) {
  return (
    <section>
      <header>
        <h2>Results</h2>
      </header>
      <Tracklist
        searchResults={searchResults}
        playList={playList}
        setPlayList={setPlayList}
      />
    </section>
  );
}
export default SearchResults;
