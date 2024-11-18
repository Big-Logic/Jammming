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
  min-height: 28rem;
  background-image: url(${(props) => props.$imageUrl});
  background-position: right top;
  background-repeat: no-repeat;
`;

function ArtistHeader({ data }) {
  const { name, imageUrl, totalFollowers } = data;

  return (
    <Card customStyle={cardCustomStyle} imageUrl={imageUrl}>
      <CardHeaderDescription>
        <CardHeaderType>Artist</CardHeaderType>
        <CardHeaderTitle>{name}</CardHeaderTitle>
        <CardInfoFlex>
          <CardHeaderMiscellaneous>
            {totalFollowers} followers
          </CardHeaderMiscellaneous>
        </CardInfoFlex>
      </CardHeaderDescription>
    </Card>
  );
}
export default ArtistHeader;
