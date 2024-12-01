import {
  AlbumColumn,
  CardRow,
  Dc,
  IndexColumn,
  TitleColumn,
} from "../../../reusable/profileCard/CardBodyItems";

function ArtistTopsTracksHeader() {
  return (
    <CardRow $bbottom={true}>
      <IndexColumn>#</IndexColumn>
      <TitleColumn>Title</TitleColumn>
      <AlbumColumn>Album</AlbumColumn>
      <Dc>Time</Dc>
    </CardRow>
  );
}
export default ArtistTopsTracksHeader;
