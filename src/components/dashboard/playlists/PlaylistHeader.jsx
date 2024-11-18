import styled from "styled-components";

//icons
import { HiMiniPlus } from "react-icons/hi2";

//hooks
import usePopup from "../../../hooks/usePopup";

//components
import CreatePlaylist from "./CreatePlaylist";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

const AddButton = styled.button`
  font-size: 2.5rem;
`;

function PlaylistHeader({ addToPlaylist }) {
  const { handleShowPopup } = usePopup();
  return (
    <Header>
      <div>
        <H2>Your Playlists</H2>
      </div>
      <ButtonsContainer>
        <AddButton
          onClick={() =>
            handleShowPopup(<CreatePlaylist addToPlaylist={addToPlaylist} />)
          }
        >
          <HiMiniPlus />
        </AddButton>
      </ButtonsContainer>
    </Header>
  );
}
export default PlaylistHeader;
