import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

// Components
import PlaylistContextMenu from "./PlaylistContextMenu";
import { useNavigate } from "react-router-dom";

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

function Playlist({ playListObj, handleDeletePlaylist, handleUpdatePlaylist }) {
  const [playlist, setPlaylist] = useState(playListObj);
  const [showMenu, setShowMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState(0);

  const navigate = useNavigate();

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
      onClick={() => navigate(`/playlists/${playlist.id}`)}
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
      <PlaylistContextMenu
        showMenu={showMenu}
        mousePosition={mousePosition}
        playlist={playlist}
        handleDeletePlaylist={handleDeletePlaylist}
      />
    </PlaylistContainer>
  );
}
export default Playlist;
