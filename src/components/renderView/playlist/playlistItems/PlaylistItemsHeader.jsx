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
  border-bottom: 1px solid black;
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
function PlaylistItemsHeader() {
  return (
    <Container>
      <Index>#</Index>
      <NameItem>Title</NameItem>
      <AlbumItem>Album</AlbumItem>
      <DateItem>Date added</DateItem>
      <DurationItem>Time</DurationItem>
    </Container>
  );
}
export default PlaylistItemsHeader;
