import { getTracksRecommendations } from "../../services/recommendations";
import Feed from "../feeds/Feed";

function TracksRecommendations() {
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
export default TracksRecommendations;
