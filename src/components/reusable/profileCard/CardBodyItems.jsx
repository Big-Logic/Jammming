import { Link } from "react-router-dom";
import styled from "styled-components";
import { calculationDuration } from "../../../utils/calculateDuration";

export const CardRow = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 2rem;
  list-style: none;
  & > * {
    padding: 0.6rem 0;
  }
  border-bottom: ${(props) => (props.$bbottom ? "1px solid black" : "none")};
`;

export const IndexColumn = styled.li`
  flex-basis: 4%;
  text-align: center;
`;

export const TitleColumn = styled.li`
  flex-basis: 40%;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1rem;
  align-items: center;
`;
export const AlbumColumn = styled.li`
  flex-basis: 30%;
`;
export const DateColumn = styled.li`
  flex-basis: 20%;
`;

export const Dc = styled.li`
  flex-basis: 6%;
  text-align: center;
`;

const ImageContainer = styled.div`
  height: 4rem;
  border-radius: 8px;
  overflow: hidden;
`;

const ArtistContainer = styled.div`
  font-size: 1.5rem;
  margin-top: -0.8rem;
  padding: 0;
`;

export function DurationColumn({ durationMs }) {
  const playDuration = calculationDuration(durationMs);
  return (
    <Dc>
      {playDuration.min}:
      {playDuration.sec < 10 ? `0${playDuration.sec}` : playDuration.sec}
    </Dc>
  );
}

export function TitleGridColumn({ id, image, name, artists }) {
  return (
    <TitleColumn>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <div>
        <Link to={`/track/${id}`}>{name}</Link>
        <ArtistContainer>
          {artists.map((artist, i, arr) => (
            <Link key={artist.id} to={`/artist/${artist.id}`}>
              {artist.name}
              {i < arr.length - 1 && ", "}
            </Link>
          ))}
        </ArtistContainer>
      </div>
    </TitleColumn>
  );
}
