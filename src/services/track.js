import requestHandler from "./requestHandler";

export async function getTrack(album_Id) {
  // fetch album
  const {
    id,
    name,
    artists,
    duration_ms: durationMs,
    album: {
      name: albumName,
      id: albumId,
      images: albumImages,
      artists: albumArtists,
      release_date: releaseDate,
    },
  } = await requestHandler({ params: `/tracks/${album_Id}` });

  return {
    id,
    name,
    artists,
    album: { albumId, albumName, albumArtists, albumImages, releaseDate },
    durationMs,
  };
}
