import { useParams } from "react-router-dom";
import { getPlaylistItems } from "../services/playlists";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";

const Hd = styled.header`
  display: grid;
  grid-template-columns: 20rem 1fr;
  align-items: center;
  background-color: bisque;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  padding: 0 2rem;
`;

const PlaylistImage = styled.img`
  border-radius: 10px;
`;

const PlaylistName = styled.h2`
  font-size: 6rem;
  margin: 2rem 0;
`;

const DescriptionWrapper = styled.p`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

function PlaylistPageHeader({ data }) {
  // invalidate query
  const queryClient = useQueryClient();
  queryClient.invalidateQueries("playlist");
  const { name, images, items, owner } = data;

  const { display_name: displayName } = owner;

  const image = images[0].url;

  console.log(items);

  let minutes = 0;
  let seconds = 0;
  if (items.length > 0) {
    let playTimeInMs = 0;
    for (let item of items) {
      playTimeInMs += item.track.duration_ms / 1000 / 60;
    }
    // convert to minutes
    minutes = Math.floor(playTimeInMs);
    seconds = Math.floor((playTimeInMs % 1) * 60);
  }

  return (
    <Hd>
      <div>
        <PlaylistImage src={image} alt="playlist image" />
      </div>
      <ContentWrapper>
        <PlaylistName>{name}</PlaylistName>
        <DescriptionWrapper>
          <span>{displayName}</span>
          <span>{items.length} Songs</span>{" "}
          <span>
            {minutes}mns {seconds}secs
          </span>
        </DescriptionWrapper>
      </ContentWrapper>
    </Hd>
  );
}

function PlaylistPage() {
  const { playlistId } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["playlist"],
    queryFn: () => getPlaylistItems(playlistId),
  });
  return (
    <>
      {data && (
        <>
          <PlaylistPageHeader data={data} />
        </>
      )}
    </>
  );
}
export default PlaylistPage;
