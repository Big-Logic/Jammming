import { useContext } from "react";
import { PopupContext } from "../contexts/popupcontext";

function usePopup() {
  const popupItems = useContext(PopupContext);
  return popupItems;
}

export default usePopup;
