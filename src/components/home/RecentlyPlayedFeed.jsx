import { getRecentlyPlayed } from "../../services/recentlyPlayed";
import Feed from "../../components/feeds/Feed";

function RecentlyPlayedFeed() {
  return (
    <section>
      <Feed
        qkey="recentlyPlayed"
        qfn={getRecentlyPlayed}
        truncType="few"
        headerTitle="Recently Played"
        headerLinkText="See more"
        headerLink="/recently-played"
      />
    </section>
  );
}
export default RecentlyPlayedFeed;
