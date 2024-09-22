export function destructurePlaylists(obj) {
  const { items } = obj;
  console.log(items);
  const playlists = items.map((item) => {
    const {
      id,
      description,
      href,
      name,
      owner: { display_name: ownerName },
      tracks: { total: totalTracks },
      images,
    } = item;

    return {
      id,
      name,
      description,
      href,
      ownerName,
      totalTracks,
      imageUrl: images?.[0]["url"],
    };
  });

  return playlists;
}
