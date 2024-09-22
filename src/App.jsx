import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppContainer from "./components/AppContainer";
import ConnectToSpotify from "./components/ConnectToSpotify";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppContainer />}>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<p>Recommendations</p>} />
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
