function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function requestHandler({
  params = "/",
  queryStr = "",
  requestMethod = "get",
  requestBody = undefined,
  hasReturnValue = true,
}) {
  const endPoint = "https://api.spotify.com/v1";
  const accessTokenDetail = JSON.parse(
    localStorage.getItem("accessTokenDetail")
  );

  const response = await fetch(`${endPoint}${params}${queryStr}`, {
    headers: {
      Authorization:
        accessTokenDetail.tokenType + " " + accessTokenDetail.accessToken,
    },
    method: requestMethod.toUpperCase(),
    body: JSON.stringify(requestBody),
  });
  if (hasReturnValue) {
    return await response.json();
  }
}

export const requestToken = async function () {
  const client_id = "e2fda6c6d0d243459c1ddbeb0309331e";
  const redirect_uri = "http://localhost:5173/";

  var stateKey = "spotify_auth_state";
  const state = generateRandomString(16);
  localStorage.setItem(stateKey, state);

  const scope =
    "user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);

  window.location = url;
};

export async function getProfile() {
  const data = await requestHandler({ params: "/me" });
  return data;
}

// PLAYLISTS

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
  //delete playlist
  await requestHandler({
    params: `/playlists/${playlistId}/followers`,
    requestMethod: "delete",
    hasReturnValue: false,
  });
}

export async function getMySaveTracks() {
  const data = await requestHandler("/me/tracks");
  console.log(data);
  return data;
}

export async function getTracksRecommendations() {
  const data = await requestHandler({ params: "/browse/categories" });

  console.log(data);
  return data;
}
