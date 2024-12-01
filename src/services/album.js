import destructureAlbumData from "../utils/destructureAlbumData";
import requestHandler from "./requestHandler";
import { getSaveTracks } from "./saveTracks";

export async function getRecommendatedAlbums() {
  const savedTracks = await getSaveTracks();

  // Remaining logic
  // 1. if savesTracks is empty, what should happen

  const savedTracksIds = savedTracks.map((tk) => tk.id);

  const { tracks } = await requestHandler({
    params: "/recommendations",
    queryStr: `?limit=10&seed_artists=${[].join(
      ","
    )}&seed_tracks=${savedTracksIds.slice(0, 5).join(",")}`,
  });

  return tracks
    .map((tk) => tk.album)
    .filter((alb) => alb.album_type === "ALBUM")
    .map((alb) => {
      const { id, artists, images, name, type } = alb;
      return { id, artists, images, name, type };
    });
}

//
export async function getAlbum(albumId) {
  // fetch album
  const album = await requestHandler({ params: `/albums/${albumId}` });

  return destructureAlbumData(album);
}

//
export async function getArtistAlbum(artistId) {
  const { items: albums } = await requestHandler({
    params: `/artists/${artistId}/albums`,
    queryStr: "?include_groups=album",
  });
  const destructuredAlbums = albums.map((album) => destructureAlbumData(album));

  return destructuredAlbums;
}
