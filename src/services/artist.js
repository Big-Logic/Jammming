import requestHandler from "./requestHandler";

export async function getArtist(artistId) {
  // fetch artist
  const { id, name, images, followers, genres, ...all } = await requestHandler({
    params: `/artists/${artistId}`,
  });

  return {
    id,
    name,
    imageUrl: images[0].url,
    totalFollowers: followers.total,
    genres,
  };
}

export async function getArtistTopTracks(artistId) {
  // fetch tracks
  const { tracks } = await requestHandler({
    params: `/artists/${artistId}/top-tracks`,
  });

  // destructure tracks
  const mapTracks = tracks.map((track) => {
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
    } = track;
    //
    return {
      id,
      name,
      artists,
      durationMs,
      album: {
        albumId,
        albumName,
        albumArtists,
        imageUrl: albumImages[0].url,
        releaseDate,
      },
    };
  });

  return mapTracks;
}
