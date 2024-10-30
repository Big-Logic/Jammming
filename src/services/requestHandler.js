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

export default requestHandler;
