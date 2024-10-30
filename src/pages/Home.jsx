import AlbumsFeed from "../features/homeFeatures/AlbumsFeed";
import NewReleasesFeed from "../features/homeFeatures/NewReleasesFeed";
import RecentlyPlayedFeed from "../features/homeFeatures/RecentlyPlayedFeed";
import TracksRecommendationsFeed from "../features/homeFeatures/TracksRecommendationsFeed";

function Home() {
  return (
    <div>
      <TracksRecommendationsFeed />
      <RecentlyPlayedFeed />
      <AlbumsFeed />
      <NewReleasesFeed />
    </div>
  );
}
export default Home;
