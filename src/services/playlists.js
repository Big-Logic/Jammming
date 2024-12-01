import requestHandler from "./requestHandler";
import { getProfile } from "./profile";

export async function getMyPlaylists() {
  const data = await requestHandler({ params: "/me/playlists" });
  return data;
}

export async function getPlaylist(playlistId) {
  const data = await requestHandler({
    params: `/playlists/${playlistId}
`,
  });
  return data;
}

export async function createPlaylist(playlistName) {
  //Get current user id
  const { id: userId } = await getProfile();
  //create playlist
  const playlist = await requestHandler({
    params: `/users/${userId}/playlists`,
    requestMethod: "post",
    requestBody: {
      name: playlistName,
    },
  });
  // destructure playlist items
  const {
    id,
    description,
    href,
    name,
    owner: { display_name: ownerName },
    tracks: { total: totalTracks },
    images,
  } = playlist;
  //
  return {
    id,
    name,
    description,
    href,
    ownerName,
    totalTracks,
    imageUrl: images?.[0]?.["url"],
  };
}

export async function updatePlaylist(playlistId, newUpdate) {
  await requestHandler({
    params: `/playlists/${playlistId}`,
    requestMethod: "put",
    requestBody: newUpdate,
    hasReturnValue: false,
  });
}

export async function deletePlaylist(playlistId) {
  await requestHandler({
    params: `/playlists/${playlistId}/followers`,
    requestMethod: "delete",
    hasReturnValue: false,
  });
}

// PLAYLIST ITEMS
export async function getPlaylistItems(playlistId) {
  // fetch playlist
  const {
    id,
    name,
    images,
    owner,
    tracks: { items },
  } = await requestHandler({
    params: `/playlists/${playlistId}`,
  });

  // destructure playlist items
  const mapTracks = items.map((item) => {
    const {
      id,
      name,
      artists,
      duration_ms: durationMs,
      album: { name: albumName, id: albumId, images: albumImages },
    } = item.track;
    return {
      id,
      name,
      artists,
      addedAt: item.added_at,
      durationMs,
      album: { albumId, albumName, albumImages },
    };
  });

  // Calculate playlist duration
  const durationMs = mapTracks
    .map((track) => track.durationMs)
    .reduce((pre, cur) => pre + cur, 0);

  return {
    id,
    name,
    imageUrl: images ? images[0].url : null,
    owner,
    durationMs,
    tracks: mapTracks,
  };
}
