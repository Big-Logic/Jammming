import { useId } from "react";
import styled from "styled-components";

// hooks
import usePopup from "../../../hooks/usePopup";

// Icons
import { HiOutlinePencil } from "react-icons/hi2";
import { HiOutlineMinusCircle } from "react-icons/hi2";

// Components
import DeletePlaylist from "./DeletePlaylist";
import EditPlaylistDetails from "./EditPlaylistDetails";

const ContextMenuContainer = styled.div`
  position: absolute;
  width: 20rem;
  top: 50%;
  left: ${(props) => props.$mousePosition + "px"};
  z-index: 99;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  ${(props) =>
    props.$showMenu
      ? "opacity: 1; visibility: visible;"
      : "opacity: 0; visibility: hidden;"}
`;

const ContextMenuButton = styled.button`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  text-align: left;
  padding: 1.8rem 1rem;
  border-bottom: 1px solid #f7f7f7;
  &:hover {
    background-color: #f6fdf9;
  }
`;

function PlaylistContextMenu({
  showMenu,
  mousePosition,
  playlist,
  handleDeletePlaylist,
  handleUpdatePlaylist,
}) {
  // popup hook
  const { handleShowPopup } = usePopup();
  //Buttons ids
  const editButtonId = useId();
  const deleteButtonId = useId();
  /*
  Handle mousedown on the entire context. Stop the mousedown event from propagating
  and handle each button mousedown action base on their unique id
  */
  function handleContextMouseDown(e) {
    e.stopPropagation();

    const closestButton = e.target.closest("button");

    if (!closestButton) return;

    if (closestButton.id === editButtonId) {
      handleShowPopup(
        <EditPlaylistDetails
          playlist={playlist}
          handleDeletePlaylist={handleUpdatePlaylist}
        />
      );
    } else if (closestButton.id === deleteButtonId) {
      handleShowPopup(
        <DeletePlaylist
          playlistId={playlist.id}
          handleDeletePlaylist={handleDeletePlaylist}
        />
      );
    } else {
      return;
    }
  }
  return (
    <ContextMenuContainer
      $showMenu={showMenu}
      onMouseDown={handleContextMouseDown}
      $mousePosition={mousePosition}
    >
      <ContextMenuButton id={editButtonId}>
        <HiOutlinePencil /> <span>Edit detail</span>
      </ContextMenuButton>
      <ContextMenuButton id={deleteButtonId}>
        <HiOutlineMinusCircle /> <span>Delete</span>
      </ContextMenuButton>
    </ContextMenuContainer>
  );
}

export default PlaylistContextMenu;
