import { css } from "styled-components";
import Card from "./../../../reusable/profileCard/Card";
import {
  CardHeaderDescription,
  CardHeaderType,
  CardHeaderTitle,
  CardInfoFlex,
  CardHeaderMiscellaneous,
} from "./../../../reusable/profileCard/CardHeaderItems";

const cardCustomStyle = css`
  min-height: 30rem;
  background-image: url(${(props) => props.$imageUrl});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: auto cover;
  background-attachment: fixed;
`;

function ArtistHeader({ data }) {
  const { name, imageUrl, totalFollowers } = data;

  let formattedFollowers = totalFollowers.toLocaleString();

  return (
    <Card customStyle={cardCustomStyle} imageUrl={imageUrl}>
      <CardHeaderDescription>
        <CardHeaderType>Artist</CardHeaderType>
        <CardHeaderTitle>{name}</CardHeaderTitle>
        <CardInfoFlex>
          <CardHeaderMiscellaneous>
            {formattedFollowers} followers
          </CardHeaderMiscellaneous>
        </CardInfoFlex>
      </CardHeaderDescription>
    </Card>
  );
}
export default ArtistHeader;
