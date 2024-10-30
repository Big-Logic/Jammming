import requestToken from "../../services/connectToSpotify";
import Button from "../Button";

function TokenRequestButton() {
  return <Button handler={requestToken}>Connect to Spotify</Button>;
}
export default TokenRequestButton;
