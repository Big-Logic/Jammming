import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//LAYOUTS
import AppLayout from "./layouts/AppLayout";
import DashboardLayout from "./layouts/DashboardLayout";

//PAGES
import ConnectToSpotify from "./features/ConnectToSpotify";
import Home from "./pages/Home";
import TracksRecommendationsPage from "./pages/TracksRecommendationsPage";
import RecentlyplayedPage from "./pages/RecentlyPlayedPage";
import RecommendedAlbumsPage from "./pages/RecommendedAlbumsPage";
import NewAlbumReleasePage from "./pages/NewAlbumReleasePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="playlists" element={<h1>Playlists</h1>} />
        <Route path="likedsongs" element={<h1>Liked Songs</h1>} />
        <Route
          path="recommended-tracks"
          element={<TracksRecommendationsPage />}
        />
        <Route path="recommended-albums" element={<RecommendedAlbumsPage />} />
        <Route path="recently-played" element={<RecentlyplayedPage />} />
        <Route path="new-album-releases" element={<NewAlbumReleasePage />} />
        <Route path="playlists/:playlistId" element={<h1>Playlsit</h1>} />
        <Route path="artists/:artistId" element={<h1>Artist</h1>} />
        <Route path="tracks/:trackId" element={<h1>Artist</h1>} />
        <Route path="albums/:albumId" element={<h1>Artist</h1>} />
      </Route>
      <Route path="connect" element={<ConnectToSpotify />} />
      <Route path="*" element={<h1>There is nothing at this route</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
