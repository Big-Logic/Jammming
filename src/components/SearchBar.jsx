import { useState } from "react";

function SearchBar({ setSearchResults }) {
  const [inputValue, setInputValue] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputValue);
    // setInputValue("");
    // setSearchResults([
    //   { id: "128rd", name: "IDK", artist: "Logic", album: "Global boy" },
    //   { id: "188rd", name: "Unavailable", artist: "Davido", album: "Timeless" },
    // ]);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default SearchBar;
