import requestHandler from "./requestHandler";

export async function getRecentlyPlayed() {
  const { items: recentlyPlayed } = await requestHandler({
    params: "/me/player/recently-played",
  });

  // Remaining logic
  // 1. If recentlyPlayed is empty, what should happen

  const mapRecentlyPlayed = recentlyPlayed
    .map((rp) => rp.track)
    .map((rp) => {
      const {
        id,
        name,
        album: { images },
        artists,
      } = rp;
      return { id, name, artists, images };
    });

  return mapRecentlyPlayed;
}
