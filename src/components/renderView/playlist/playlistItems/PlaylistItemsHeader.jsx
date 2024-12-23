// import styled from "styled-components";
import {
  AlbumColumn,
  CardRow,
  DateColumn,
  Dc,
  IndexColumn,
  TitleColumn,
} from "../../../reusable/profileCard/CardBodyItems";

function PlaylistItemsHeader() {
  return (
    <CardRow $bbottom={true}>
      <IndexColumn>#</IndexColumn>
      <TitleColumn>Title</TitleColumn>
      <AlbumColumn>Album</AlbumColumn>
      <DateColumn>Date Added</DateColumn>
      <Dc>Time</Dc>
    </CardRow>
  );
}
export default PlaylistItemsHeader;
