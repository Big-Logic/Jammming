import { useCallback, useEffect, useId, useState } from "react";
import styled from "styled-components";

// hooks
import usePopup from "../hooks/usePopup";

// Icons
import { HiOutlinePencil } from "react-icons/hi2";
import { HiOutlineMinusCircle } from "react-icons/hi2";

const defaultImageUrl =
  "https://firebasestorage.googleapis.com/v0/b/odc-liberia.appspot.com/o/images%2Fmusic_default.png?alt=media&token=aee862c8-1dc2-4a2e-b0aa-5fd440d1aadd";

const PlaylistContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1.6rem;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f6fdf9;
  }
`;

const ImageContainer = styled.div`
  height: 50px;
  border-radius: 6px;
  overflow: hidden;
`;
const Image = styled.img`
  height: 100%;
  border-radius: 6px;
`;

const PlaylistName = styled.h3`
  font-size: 1.8rem;
`;

const P = styled.p`
  font-size: 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Span = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #000;
  border-radius: 50%;
  margin: 0 0.4rem;
`;

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

const DeletePlaylistContainer = styled.div`
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

const CpButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
`;

function DeletePlaylist() {
  return (
    <DeletePlaylistContainer>
      <div>
        <p>Are you sure you want to delete this playlist?</p>
        <DeleteButtonsContainer>
          <DeletePlaylistButton>Cancel</DeletePlaylistButton>
          <DeletePlaylistButton $bgColor="#1ed760">
            Confirm
          </DeletePlaylistButton>
        </DeleteButtonsContainer>
      </div>
    </DeletePlaylistContainer>
  );
}

function ContextMenu({ showMenu, mousePosition, playlistId }) {
  const { showPopup, popupComponent, handleHidePopup, handleShowPopup } =
    usePopup();
  //Buttons ids
  const editButtonId = useId();
  const deleteButtonId = useId();

  function handleDelete() {
    console.log("Delete");
  }

  function handleEdit() {
    console.log("Edit");
  }

  function handleContextClick(e) {
    e.stopPropagation();

    const closestButton = e.target.closest("button");

    if (!closestButton) return;

    if (closestButton.id === editButtonId) {
      // handleEdit();
      handleShowPopup(<p>Working</p>);
    } else if (closestButton.id === deleteButtonId) {
      handleShowPopup(<DeletePlaylist />);
    } else {
      return;
    }
  }
  return (
    <ContextMenuContainer
      $showMenu={showMenu}
      onMouseDown={handleContextClick}
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

function Playlist({ playListObj }) {
  const [playlist, setPlaylist] = useState(playListObj);
  const [showMenu, setShowMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState(0);

  // Add or Remove mousedown event from the document
  const handleMouseDown = useCallback(() => {
    setShowMenu(false);
  }, []);

  useEffect(
    function () {
      if (showMenu) {
        document.addEventListener("mousedown", handleMouseDown);
      } else {
        document.removeEventListener("mousedown", handleMouseDown);
      }
    },
    [showMenu, handleMouseDown]
  );
  ////////////

  function handleContextMenu(e) {
    e.preventDefault();
    const mouseDistance = e.clientX;
    const playlistContainerOffsetX = e.target
      .closest(`#playlist_container`)
      .getBoundingClientRect().left;

    const x = mouseDistance - playlistContainerOffsetX;

    setMousePosition(x);
    setShowMenu(true);
  }

  return (
    <PlaylistContainer
      onContextMenu={handleContextMenu}
      id="playlist_container"
    >
      <ImageContainer>
        <Image src={playlist.imageUrl || defaultImageUrl} />
      </ImageContainer>
      <div>
        <PlaylistName>{playlist.name}</PlaylistName>
        <P>
          Playlist<Span>.</Span>
          {playlist.ownerName}
        </P>
      </div>
      <ContextMenu
        showMenu={showMenu}
        mousePosition={mousePosition}
        playlistId={playlist.id}
      />
    </PlaylistContainer>
  );
}
export default Playlist;
