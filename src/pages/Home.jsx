import TracksRecommendationsFeed from "../components/home/TracksRecommendationsFeed";
import RecentlyPlayedFeed from "../components/home/RecentlyPlayedFeed";
import NewReleasesFeed from "../components/home/NewReleasesFeed";
import AlbumsFeed from "../components/home/AlbumsFeed";

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
