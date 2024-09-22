import { requestToken } from "../services/services";
import Button from "./Button";

function TokenRequestButton() {
  return <Button handler={requestToken}>Connect to Spotify</Button>;
}
export default TokenRequestButton;
