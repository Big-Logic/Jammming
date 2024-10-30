function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const requestToken = async function () {
  const client_id = "e2fda6c6d0d243459c1ddbeb0309331e";
  const redirect_uri = "http://localhost:5173/";

  var stateKey = "spotify_auth_state";
  const state = generateRandomString(16);
  localStorage.setItem(stateKey, state);

  const scope =
    "user-read-private user-read-email user-follow-read user-follow-modify user-top-read user-read-recently-played user-library-read playlist-read-private playlist-modify-private playlist-modify-public";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);

  window.location = url;
};

export default requestToken;
