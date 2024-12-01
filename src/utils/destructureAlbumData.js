function destructureAlbumData(album) {
  // fetch album
  const {
    id,
    name,
    artists,
    images,
    total_tracks: totalTracks,
    release_date: releaseDate,
    tracks: { items = [] } = {},
  } = album;

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
    tracks: mapTracks,
    durationMs,
  };
}

export default destructureAlbumData;
