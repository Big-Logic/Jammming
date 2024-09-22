import { Outlet } from "react-router-dom";
import GlobalStyle from "../styles/globalsStyles";
import { extractToken } from "../utils/extraToken";
import PopupContextProvider from "../contexts/popupcontext";
import Popup from "./Popup";

function AppContainer() {
  // Extract token and store it to local storage when a new one is generated
  extractToken();

  return (
    <>
      <GlobalStyle />
      <main>
        <PopupContextProvider>
          <Outlet />
          <Popup />
        </PopupContextProvider>
      </main>
    </>
  );
}
export default AppContainer;
