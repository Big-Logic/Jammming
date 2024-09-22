import { useState } from "react";
import styled from "styled-components";
import { createPlaylist } from "../services/services";
import usePopup from "../hooks/usePopup";
import { HiMiniXMark } from "react-icons/hi2";

const CreatePlaylistContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 1rem;
`;

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

const CpButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
`;

function ClosePopupButton() {
  const { handleHidePopup } = usePopup();
  return (
    <CpButton onClick={() => handleHidePopup()}>
      <HiMiniXMark />
    </CpButton>
  );
}

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
    <CreatePlaylistContainer id="create__playlist__container">
      <ClosePopupButton />
      <CreatePlaylistForm onSubmit={handleSubmit}>
        <CreatePlaylistInput
          type="text"
          placeholder="Enter playlist name"
          value={playListName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <CreatePlaylistButton>Create</CreatePlaylistButton>
      </CreatePlaylistForm>
    </CreatePlaylistContainer>
  );
}
export default CreatePlaylist;
