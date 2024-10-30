import { Outlet } from "react-router-dom";

// styles
import GlobalStyle from "../styles/globalsStyles";

// utils
import { extractToken } from "../utils/extraToken";

// components
import PopupContextProvider from "../contexts/popupcontext";
import Popup from "../components/popup/Popup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function AppLayout() {
  // Extract token and store it to local storage when a new one is generated
  extractToken();

  return (
    <>
      <GlobalStyle />
      <main>
        <QueryClientProvider client={queryClient}>
          <PopupContextProvider>
            <Outlet />
            <Popup />
          </PopupContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </>
  );
}
export default AppLayout;
