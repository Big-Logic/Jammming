import styled from "styled-components";
import usePopup from "../../hooks/usePopup";
import { useState } from "react";
import { updatePlaylist } from "../../services/services";

const Form = styled.form`
  width: 80%;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #e0dddd;
  border-radius: 100px;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #e0dddd;
  border-radius: 10px;
  height: 10rem;
  margin-top: 3rem;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  background-color: #1ed760;
  margin-top: 3rem;
  padding: 1.5rem 0.5rem;
  border-radius: 100px;
  font-weight: 500;
`;

function EditPlaylistDetails({ playlist, handleUpdatePlaylist }) {
  const { handleHidePopup } = usePopup();
  const [playListName, setPlaylistName] = useState(playlist.name);
  const [playListDescription, setPlaylistDescription] = useState(
    playlist.description
  );
  async function handleSubmit(e) {
    e.preventDefault();

    const nameNotDifferent = Object.is(playListName.trim(), playlist.name); //assign true if the new value is the same as the old value
    const descriptionNotDifferent = Object.is(
      playListDescription.trim(),
      playlist.description
    ); //assign true if the new value is the same as the old value

    let updateObj;

    if (!playListName) return; //Playlist name input must contain a value

    //If both name and description values are the same as their new values, do nothing
    if (nameNotDifferent && descriptionNotDifferent) {
      return;
    }

    if (!nameNotDifferent && descriptionNotDifferent) {
      updateObj = { name: playListName };
    }

    if (nameNotDifferent && !descriptionNotDifferent) {
      updateObj = { description: playListDescription };
    }

    if (!nameNotDifferent && !descriptionNotDifferent) {
      updateObj = { name: playListName, description: playListDescription };
    }
    try {
      await updatePlaylist(playlist.id, updateObj);
      handleHidePopup(); //close popup
      console.log({ ...playlist, ...updateObj });
      //   handleUpdatePlaylist(updateObj); //update the ui
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter playlist name"
        value={playListName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <Textarea
        placeholder="Enter playlist details"
        value={playListDescription}
        onChange={(e) => setPlaylistDescription(e.target.value)}
      />
      <Button>Save</Button>
    </Form>
  );
}
export default EditPlaylistDetails;
