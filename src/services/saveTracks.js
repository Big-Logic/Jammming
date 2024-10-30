import requestHandler from "./requestHandler";
export async function getSaveTracks() {
  const { items } = await requestHandler({ params: "/me/tracks" });
  return items
    .map((track) => track.track)
    .map((tk) => {
      const {
        id,
        name,
        album: { images },
        artists,
      } = tk;
      return { id, name, artists, images };
    });
}
