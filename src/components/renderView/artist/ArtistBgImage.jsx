import styled from "styled-components";

const Div = styled.div`
  /* background-image: url(${(props) => props.$imageUrl}); */
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 50rem;
`;

function ArtistBgImage({ data }) {
  const { imageUrl } = data;
  return <Div $imageUrl={imageUrl}></Div>;
}
export default ArtistBgImage;
