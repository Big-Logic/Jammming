import { calculationDuration } from "../../../../utils/calculateDuration";
import Card from "./../../../reusable/profileCard/Card";
import {
  CardHeaderGrid,
  CardHeaderImage,
  CardHeaderDescription,
  CardHeaderType,
  CardHeaderTitle,
  CardInfoFlex,
  CardHeaderUserFlex,
  CardHeaderUserImage,
  CardHeaderUserName,
  CardHeaderMiscellaneous,
} from "./../../../reusable/profileCard/CardHeaderItems";

function TrackHeader({ data }) {
  const { id, name, artists, album, durationMs } = data;

  const playDuration = calculationDuration(durationMs);

  const imageUrl = album.albumImages[0].url;

  return (
    <Card>
      <CardHeaderGrid>
        <CardHeaderImage src={imageUrl} alt={name} />
        <CardHeaderDescription>
          <CardHeaderType>Track</CardHeaderType>
          <CardHeaderTitle>{name}</CardHeaderTitle>
          <CardInfoFlex>
            {/* <CardHeaderUserFlex>
              <CardHeaderUserImage src={"/m"} />
            </CardHeaderUserFlex> */}
            <CardHeaderUserName>
              {album.albumArtists[0].name}
            </CardHeaderUserName>
            <CardHeaderMiscellaneous>{album.albumName}</CardHeaderMiscellaneous>
            <CardHeaderMiscellaneous>
              {new Date(album.releaseDate).getFullYear()}
            </CardHeaderMiscellaneous>
            <CardHeaderMiscellaneous>
              {playDuration.min}:
              {playDuration.sec < 10
                ? `0${playDuration.sec}`
                : playDuration.sec}
            </CardHeaderMiscellaneous>
          </CardInfoFlex>
        </CardHeaderDescription>
      </CardHeaderGrid>
    </Card>
  );
}
export default TrackHeader;
