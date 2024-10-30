import requestHandler from "./requestHandler";

export async function getUserTopItem(item) {
  const data = await requestHandler({ params: `/me/top/${item}` });
  return data;
}
