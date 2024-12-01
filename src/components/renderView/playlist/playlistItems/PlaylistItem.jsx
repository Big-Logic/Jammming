import { Link } from "react-router-dom";

// Components
import {
  AlbumColumn,
  CardRow,
  DateColumn,
  DurationColumn,
  IndexColumn,
  TitleGridColumn,
} from "../../../reusable/profileCard/CardBodyItems";

function PlaylistItem({ data, index }) {
  // toLocalDateString options
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const image = data.album.albumImages[0].url;

  return (
    <CardRow>
      <IndexColumn>{index}</IndexColumn>
      <TitleGridColumn
        image={image}
        id={data.id}
        name={data.name}
        artists={data.artists}
      />
      <AlbumColumn>
        <Link to={`/album/${data.album.albumId}`}>{data.album.albumName}</Link>
      </AlbumColumn>
      <DateColumn>
        {new Date(data.addedAt).toLocaleDateString(undefined, options)}
      </DateColumn>
      <DurationColumn durationMs={data.durationMs} />
    </CardRow>
  );
}

export default PlaylistItem;
