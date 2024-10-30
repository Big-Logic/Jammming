import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return <Button handler={handleClick}>Cl</Button>;
}
export default BackButton;
