// SERVICES
import { getRecentlyPlayed } from "../../services/recentlyPlayed";

// COMPONENTS
import Feed from "../feeds/Feed";

function RecentlyPlayed() {
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
export default RecentlyPlayed;
