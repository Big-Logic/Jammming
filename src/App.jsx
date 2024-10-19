import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//LAYOUTS
import AppLayout from "./layouts/AppLayout";
import DashboardLayout from "./layouts/DashboardLayout";

//FEATURES
import ConnectToSpotify from "./features/ConnectToSpotify";
import Recommendations from "./components/recommendations/Recommendations";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Recommendations />} />
        <Route path="playlists" element={<h1>Playlists</h1>} />
        <Route path="likedsongs" element={<h1>Liked Songs</h1>} />
      </Route>
      <Route path="connect" element={<ConnectToSpotify />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
