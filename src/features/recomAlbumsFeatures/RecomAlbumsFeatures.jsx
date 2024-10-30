// SERVICES
import { getRecommendatedAlbums } from "../../services/album";

// COMPONENTS
import Feed from "../../components/feeds/Feed";

function RecomAlbumsFeatures() {
  return (
    <section>
      <Feed
        qkey="recommendatedAlbums"
        qfn={getRecommendatedAlbums}
        headerTitle="Albums based on songs you liked"
      />
    </section>
  );
}
export default RecomAlbumsFeatures;
