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
