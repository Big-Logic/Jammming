export async function getMySaveTracks() {
  const data = await requestHandler("/me/tracks");
  console.log(data);
  return data;
}
