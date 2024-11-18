import requestHandler from "./requestHandler";

export async function getArtist(artistId) {
  const { id, name, images, followers, genres, ...all } = await requestHandler({
    params: `/artists/${artistId}`,
  });

  console.log(all);

  return {
    id,
    name,
    imageUrl: images[0].url,
    totalFollowers: followers.total,
    genres,
  };
}
