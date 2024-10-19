import { Outlet } from "react-router-dom";

// styles
import GlobalStyle from "../styles/globalsStyles";

// utils
import { extractToken } from "../utils/extraToken";

// components
import PopupContextProvider from "../contexts/popupcontext";
import Popup from "../components/popup/Popup";

function AppLayout() {
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
export default AppLayout;
