import { getTracksRecommendations } from "../../services/recommendations";
import Feed from "../../components/feeds/Feed";

function TracksRecommendationsFeature() {
  return (
    <section>
      <Feed
        qkey="recommendations"
        qfn={getTracksRecommendations}
        headerTitle="Recommended for Today"
      />
    </section>
  );
}
export default TracksRecommendationsFeature;
