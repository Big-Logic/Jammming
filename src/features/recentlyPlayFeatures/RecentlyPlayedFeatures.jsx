// SERVICES
import { getRecentlyPlayed } from "../../services/recentlyPlayed";

// COMPONENTS
import Feed from "../../components/feeds/Feed";

function RecentlyPlayedFeatures() {
  return (
    <section>
      <Feed
        qkey="recentlyPlayed"
        qfn={getRecentlyPlayed}
        headerTitle="Recently Played"
      />
    </section>
  );
}
export default RecentlyPlayedFeatures;
