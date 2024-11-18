// SERVICES
import { getRecommendatedAlbums } from "../../services/album";

// COMPONENTS
import Feed from "../../components/feeds/Feed";

function AlbumsFeed() {
  return (
    <section>
      <Feed
        qkey="recommendatedAlbums"
        qfn={getRecommendatedAlbums}
        truncType="few"
        headerTitle="Albums based on songs you liked"
        headerLinkText="See more"
        headerLink="/recommended-albums"
      />
    </section>
  );
}
export default AlbumsFeed;
