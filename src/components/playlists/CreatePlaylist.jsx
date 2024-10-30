import { useState } from "react";
import styled from "styled-components";

// hooks
import usePopup from "../../hooks/usePopup";

// services
import { createPlaylist } from "../../services/playlists";

const CreatePlaylistForm = styled.form`
  width: 80%;
`;

const CreatePlaylistInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #e0dddd;
  border-radius: 100px;
`;

const CreatePlaylistButton = styled.button`
  display: block;
  width: 100%;
  background-color: #1ed760;
  margin-top: 3rem;
  padding: 1.5rem 0.5rem;
  border-radius: 100px;
  font-weight: 500;
`;

function CreatePlaylist({ addToPlaylist }) {
  const { handleHidePopup } = usePopup();
  const [playListName, setPlaylistName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await createPlaylist(playListName);
      addToPlaylist(res);
      handleHidePopup();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <CreatePlaylistForm onSubmit={handleSubmit}>
      <CreatePlaylistInput
        type="text"
        placeholder="Enter playlist name"
        value={playListName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <CreatePlaylistButton>Create</CreatePlaylistButton>
    </CreatePlaylistForm>
  );
}
export default CreatePlaylist;
