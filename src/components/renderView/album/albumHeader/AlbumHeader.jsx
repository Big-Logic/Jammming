import { calculationDuration } from "../../../../utils/calculateDuration";
import Card from "./../../../reusable/profileCard/Card";
import {
  CardHeaderGrid,
  CardHeaderImage,
  CardHeaderDescription,
  CardHeaderType,
  CardHeaderTitle,
  CardInfoFlex,
  CardHeaderUserName,
  CardHeaderMiscellaneous,
} from "./../../../reusable/profileCard/CardHeaderItems";

function AlbumHeader({ data }) {
  const { id, name, artists, imageUrl, totalTracks, releaseDate, durationMs } =
    data;

  const playDuration = calculationDuration(durationMs);

  return (
    <Card>
      <CardHeaderGrid>
        <CardHeaderImage src={imageUrl} alt={name} />
        <CardHeaderDescription>
          <CardHeaderType>Album</CardHeaderType>
          <CardHeaderTitle>{name}</CardHeaderTitle>
          <CardInfoFlex>
            <CardHeaderUserName>{artists[0].name}</CardHeaderUserName>
            <CardHeaderMiscellaneous>
              {new Date(releaseDate).getFullYear()}
            </CardHeaderMiscellaneous>
            <CardHeaderMiscellaneous>
              {totalTracks} songs
            </CardHeaderMiscellaneous>
            <CardHeaderMiscellaneous>
              {Object.keys(playDuration).map((key) =>
                playDuration[key] > 0 ? (
                  <CardHeaderMiscellaneous key={key}>
                    {playDuration[key]} {key}{" "}
                  </CardHeaderMiscellaneous>
                ) : (
                  ""
                )
              )}
            </CardHeaderMiscellaneous>
          </CardInfoFlex>
        </CardHeaderDescription>
      </CardHeaderGrid>
    </Card>
  );
}
export default AlbumHeader;
