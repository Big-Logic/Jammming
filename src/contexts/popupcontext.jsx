import { createContext, useState } from "react";

export const PopupContext = createContext(false);

function PopupContextProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupComponent, setPopupComponent] = useState(null);

  function handleShowPopup(component) {
    console.log("hello");
    setShowPopup(true);
    setPopupComponent(component);
  }

  function handleHidePopup() {
    setShowPopup(false);
  }
  return (
    <PopupContext.Provider
      value={{ showPopup, popupComponent, handleHidePopup, handleShowPopup }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export default PopupContextProvider;
