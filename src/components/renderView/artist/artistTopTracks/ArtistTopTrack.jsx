import { Link } from "react-router-dom";
import {
  AlbumColumn,
  CardRow,
  DateColumn,
  DurationColumn,
  IndexColumn,
  TitleGridColumn,
} from "../../../reusable/profileCard/CardBodyItems";

function ArtistTopTrack({ data, index }) {
  const {
    id,
    name,
    artists,
    durationMs,
    album: { albumId, albumName, imageUrl },
  } = data;

  return (
    <CardRow>
      <IndexColumn>{index}</IndexColumn>
      <TitleGridColumn image={imageUrl} id={id} name={name} artists={artists} />
      <AlbumColumn>
        <Link to={`/album/${albumId}`}>{albumName}</Link>
      </AlbumColumn>
      <DurationColumn durationMs={durationMs} />
    </CardRow>
  );
}
export default ArtistTopTrack;
