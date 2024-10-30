import requestHandler from "./requestHandler";

export async function getProfile() {
  const data = await requestHandler({ params: "/me" });
  return data;
}
