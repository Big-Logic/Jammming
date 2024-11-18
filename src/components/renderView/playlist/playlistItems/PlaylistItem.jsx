import { Link } from "react-router-dom";
import { calculationDuration } from "../../../../utils/calculateDuration";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 2rem;
  list-style: none;
  & > * {
    padding: 0.6rem 0;
  }
`;

const Index = styled.li`
  flex-basis: 4%;
  text-align: center;
`;

const NameItem = styled.li`
  /* flex-grow: 3; */
  flex-basis: 40%;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1rem;
  align-items: center;
`;
const AlbumItem = styled.li`
  /* flex-grow: 2; */
  flex-basis: 30%;
`;
const DateItem = styled.li`
  /* flex-grow: 1; */
  flex-basis: 20%;
`;

const DurationItem = styled.li`
  flex-basis: 6%;
  text-align: center;
`;

const ImageContainer = styled.div`
  /* max-width: 10rem; */
  height: 4rem;
  border-radius: 8px;
  overflow: hidden;
`;

const ArtistContainer = styled.div`
  font-size: 1.5rem;
  margin-top: -0.8rem;
  padding: 0;
`;

function PlaylistItem({ data, index }) {
  // toLocalDateString options
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const image = data.album.albumImages[0].url;

  const playDuration = calculationDuration(data.durationMs);
  return (
    <Container>
      <Index>{index}</Index>
      <NameItem>
        <ImageContainer>
          <img src={image} alt={data.name} />
        </ImageContainer>
        <div>
          <Link to={`/track/${data.id}`}>{data.name}</Link>
          <ArtistContainer>
            {data.artists.map((artist, i, arr) => (
              <Link key={artist.id} to={`/artist/${artist.id}`}>
                {artist.name}
                {i < arr.length - 1 && ", "}
              </Link>
            ))}
          </ArtistContainer>
        </div>
      </NameItem>
      <AlbumItem>
        <Link to={`/album/${data.album.albumId}`}>{data.album.albumName}</Link>
      </AlbumItem>
      <DateItem>
        {new Date(data.addedAt).toLocaleDateString(undefined, options)}
      </DateItem>
      <DurationItem>
        {playDuration.min}:
        {playDuration.sec < 10 ? `0${playDuration.sec}` : playDuration.sec}
      </DurationItem>
    </Container>
  );
}

export default PlaylistItem;
