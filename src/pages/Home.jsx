import AlbumsFeed from "../features/homeFeatures/AlbumsFeed";
import RecentlyPlayedFeed from "../features/homeFeatures/RecentlyPlayedFeed";
import TracksRecommendationsFeed from "../features/homeFeatures/TracksRecommendationsFeed";

function Home() {
  return (
    <div>
      <TracksRecommendationsFeed />
      <RecentlyPlayedFeed />
      <AlbumsFeed />
    </div>
  );
}
export default Home;
