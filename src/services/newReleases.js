import requestHandler from "./requestHandler";

export async function getNewAlbumReleases() {
  const {
    albums: { items },
  } = await requestHandler({ params: "/browse/new-releases" });
  return items
    .filter((alb) => alb.album_type === "album")
    .map((alb) => {
      const { id, artists, images, name } = alb;
      return { id, artists, images, name };
    });
}
