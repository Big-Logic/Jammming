// SERVICES
import { getRecommendatedAlbums } from "../../services/album";

// COMPONENTS
import Feed from "../feeds/Feed";

function RecommendedAlbums() {
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
export default RecommendedAlbums;
