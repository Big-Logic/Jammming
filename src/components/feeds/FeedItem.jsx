import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  /* background-color: brown; */
  padding: 1rem;
  border-radius: 10px;
`;

const Img = styled.img`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const SongTitle = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 1.2;
`;

// const SongArtists = styled.a`
//   font: 1.4rem;
//   line-height: 1.2;
// `;

function FeedItem({ data }) {
  return (
    <Item>
      <div>
        <Img src={data.images[0].url} />
      </div>
      <div>
        <SongTitle>{data.name}</SongTitle>
        {data.artists.map((artist, i, arr) => (
          <Link key={artist.id} to={`/artists/${artist.id}`}>
            {artist.name}
            {i < arr.length - 1 && ", "}
          </Link>
        ))}
      </div>
    </Item>
  );
}

export default FeedItem;
