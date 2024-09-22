import styled from "styled-components";

//icons
import { HiMiniPlus } from "react-icons/hi2";

//hooks
import usePopup from "../hooks/usePopup";

//components
import CreatePlaylist from "./CreatePlaylist";

const PH = styled.header`
  display: grid;
  grid-template-columns: 1fr 4rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const PlaylistHeaderH2 = styled.h2`
  font-size: 2rem;
`;

const PLHeaderButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

const PLAddButton = styled.button`
  font-size: 2.5rem;
`;

function PlaylistHeader({ addToPlaylist }) {
  const { handleShowPopup } = usePopup();
  return (
    <PH>
      <div>
        <PlaylistHeaderH2>Your Playlists</PlaylistHeaderH2>
      </div>
      <PLHeaderButtonsContainer>
        <PLAddButton
          onClick={() =>
            handleShowPopup(<CreatePlaylist addToPlaylist={addToPlaylist} />)
          }
        >
          <HiMiniPlus />
        </PLAddButton>
      </PLHeaderButtonsContainer>
    </PH>
  );
}
export default PlaylistHeader;
