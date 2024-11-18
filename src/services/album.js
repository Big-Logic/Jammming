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

export async function getAlbum(albumId) {
  // fetch album
  const {
    id,
    name,
    artists,
    images,
    total_tracks: totalTracks,
    release_date: releaseDate,
    tracks: { items },
  } = await requestHandler({ params: `/albums/${albumId}` });

  // destructure album tracks
  const mapTracks = items.map((item) => {
    const { id, name, artists, duration_ms: durationMs } = item;
    return { id, name, artists, durationMs };
  });

  // Calculate album duration
  const durationMs = mapTracks
    .map((track) => track.durationMs)
    .reduce((pre, cur) => pre + cur, 0);

  return {
    id,
    name,
    artists,
    imageUrl: images[0].url,
    totalTracks,
    releaseDate,
    mapTracks,
    durationMs,
  };
}
