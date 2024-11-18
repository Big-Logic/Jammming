import requestHandler from "./requestHandler";
import { getUserTopItem } from "./topItem";

async function getAvailableGenres() {
  const { genres } = await requestHandler({
    params: "/recommendations/available-genre-seeds",
  });
  return genres;
}

export async function getTracksRecommendations() {
  const { items: topArtists } = await getUserTopItem("artists");
  const { items: topTracks } = await getUserTopItem("tracks");

  // Remaining logic
  // 1. If topArtist and topTracks are empty, what should happen
  // 1. Getting recommendations base on genres

  const topArtistsIds = topArtists.map((ta) => ta.id);
  const topTracksIds = topTracks.map((tt) => tt.id);

  // const genres = await getAvailableGenres();
  // console.log(genres, "genres");

  //seed_genres=${genres.join(",").slice(0, 10)}
  const { tracks: recommendations } = await requestHandler({
    params: "/recommendations",
    queryStr: `?limit=10&seed_artists=${topArtistsIds
      .slice(0, 5)
      .join(",")}&seed_tracks=${topTracksIds.slice(0, 5).join(",")}`,
  });

  return recommendations.map((rd) => {
    const {
      id,
      name,
      album: { images },
      artists,
      type,
    } = rd;
    return { id, name, artists, images, type };
  });
}
