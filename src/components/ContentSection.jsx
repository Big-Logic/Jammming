import styled from "styled-components";
import { checkTokenAvailability } from "../utils/extraToken";
import { getPlaylist, getProfile, requestToken } from "../services/services";
import SearchBar from "./SearchBar";
import TracklistAndPlaylistContainer from "./TracklistAndPlaylistContainer";
import { useEffect, useState } from "react";
import TokenRequestButton from "./TokenRequestButton";
import UserProfile from "./UserProfile";
import Button from "./Button";

const Section = styled.section`
  text-align: center;
`;

function ContentSection() {
  //   const [searchResults, setSearchResults] = useState([
  //     {
  //       id: "128rd",
  //       name: "IDK",
  //       artist: "Logic",
  //       album: "Global boy",
  //       uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
  //     },
  //     {
  //       id: "188rd",
  //       name: "Unavailable",
  //       artist: "Davido",
  //       album: "Timeless",
  //       uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
  //     },
  //   ]);

  return (
    <Section>
      {!checkTokenAvailability() && <TokenRequestButton />}
      {checkTokenAvailability() && (
        <>
          <div>
            {/* <SearchBar setSearchResults={setSearchResults} />
            <TracklistAndPlaylistContainer searchResults={searchResults} /> */}
            <UserProfile />
            <Button>Tracks</Button>
            <Button>playlists</Button>
          </div>
        </>
      )}
    </Section>
  );
}
export default ContentSection;
