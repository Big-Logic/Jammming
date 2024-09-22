export const extractToken = function () {
  if (location.hash) {
    const urlHash = location.hash.split("&");
    const accessTokenDetail = {
      accessToken: urlHash[0].split("=")[1],
      tokenType: urlHash[1].split("=")[1],
      expiresIn: urlHash[2].split("=")[1] * 60 + new Date().getTime(),
      tokenState: urlHash[3].split("=")[1],
    };

    localStorage.setItem(
      "accessTokenDetail",
      JSON.stringify(accessTokenDetail)
    );

    location.replace(location.origin);
  }
};

export const checkTokenAvailability = function () {
  const accessTokenDetail = JSON.parse(
    localStorage.getItem("accessTokenDetail")
  );
  if (accessTokenDetail) {
    const currentTime = new Date().getTime();
    if (currentTime < accessTokenDetail.expiresIn) {
      return true;
    }
  }

  return false;
};
