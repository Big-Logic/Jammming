import styled from "styled-components";
import { useQueryClient } from "@tanstack/react-query";
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

function PlaylistHeader({ data }) {
  // invalidate query
  const queryClient = useQueryClient();
  queryClient.invalidateQueries("playlist");

  //
  const {
    name,
    imageUrl,
    items,
    durationMs,
    owner: { display_name: displayName },
  } = data;

  const playDuration = calculationDuration(durationMs);

  return (
    <Card>
      <CardHeaderGrid>
        <CardHeaderImage src={imageUrl} alt="playlist image" />
        <CardHeaderDescription>
          <CardHeaderType>Playlist</CardHeaderType>
          <CardHeaderTitle>{name}</CardHeaderTitle>
          <CardInfoFlex>
            <CardHeaderUserName>{displayName}</CardHeaderUserName>
            <CardHeaderMiscellaneous>
              {items.length} Songs,
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

export default PlaylistHeader;
