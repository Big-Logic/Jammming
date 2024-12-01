// import styled from "styled-components";
import {
  CardRow,
  Dc,
  IndexColumn,
  TitleColumn,
} from "../../../reusable/profileCard/CardBodyItems";

function AlbumItemsHeader() {
  return (
    <CardRow $bbottom={true}>
      <IndexColumn>#</IndexColumn>
      <TitleColumn>Title</TitleColumn>
      <Dc>Time</Dc>
    </CardRow>
  );
}
export default AlbumItemsHeader;
