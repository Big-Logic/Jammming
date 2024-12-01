// Components
import { Link } from "react-router-dom";
import {
  AlbumColumn,
  CardRow,
  DateColumn,
  DurationColumn,
  IndexColumn,
  TitleGridColumn,
} from "../../../reusable/profileCard/CardBodyItems";

function ArtistAlbum({ data, index }) {
  const { id, name, imageUrl, releaseDate } = data;

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <CardRow>
      <IndexColumn>{index}</IndexColumn>
      {/* <TitleGridColumn
        image={imageUrl}
        id={id}
        name={name}
        // artists={}
      /> */}
      <AlbumColumn>
        <Link to={`/album/${id}`}>{name}</Link>
      </AlbumColumn>
      <DateColumn>
        {new Date(releaseDate).toLocaleDateString(undefined, options)}
      </DateColumn>
      {/* <DurationColumn durationMs={data.durationMs} /> */}
    </CardRow>
  );
}
export default ArtistAlbum;
