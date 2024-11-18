import requestHandler from "./requestHandler";

export async function getNewAlbumReleases() {
  const {
    albums: { items },
  } = await requestHandler({ params: "/browse/new-releases" });
  console.log(items, "hi");
  return items
    .filter((alb) => alb.album_type === "album")
    .map((alb) => {
      const { id, artists, images, name, type } = alb;
      return { id, artists, images, name, type };
    });
}
