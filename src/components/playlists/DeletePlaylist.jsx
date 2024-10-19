import styled from "styled-components";
import { deletePlaylist } from "../../services/services";
import usePopup from "../../hooks/usePopup";

const DeletePlaylistContainer = styled.div``;

const DeleteButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

const DeletePlaylistButton = styled.button`
  min-width: 9rem;
  background-color: ${(props) => props.$bgColor || "#f7f7f7"};
  margin-top: 3rem;
  padding: 1.5rem 0.5rem;
  border-radius: 100px;
  font-weight: 500;
`;

function DeletePlaylist({ playlistId, handleDeletePlaylist }) {
  //
  const { handleHidePopup } = usePopup();
  //
  async function handleDeleteButtonClick() {
    try {
      await deletePlaylist(playlistId); //delete from server
      handleHidePopup(); //close popup
      handleDeletePlaylist(playlistId); //delete from ui
    } catch (err) {
      console.log(err);
    }
  }

  function handleCancelClick() {
    handleHidePopup();
  }
  return (
    <DeletePlaylistContainer>
      <p>Are you sure you want to delete this playlist?</p>
      <DeleteButtonsContainer>
        <DeletePlaylistButton onClick={handleCancelClick}>
          Cancel
        </DeletePlaylistButton>
        <DeletePlaylistButton
          $bgColor="#1ed760"
          onClick={handleDeleteButtonClick}
        >
          Confirm
        </DeletePlaylistButton>
      </DeleteButtonsContainer>
    </DeletePlaylistContainer>
  );
}

export default DeletePlaylist;
