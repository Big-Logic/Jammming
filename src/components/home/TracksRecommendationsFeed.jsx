import { getTracksRecommendations } from "../../services/recommendations";
import Feed from "../feeds/Feed";

function TracksRecommendationsFeed() {
  return (
    <section>
      <Feed
        qkey="recommendations"
        qfn={getTracksRecommendations}
        truncType="few"
        headerTitle="Recommended for Today"
        headerLinkText="See more"
        headerLink="/recommended-tracks"
      />
    </section>
  );
}
export default TracksRecommendationsFeed;
