// SERVICES
import { getNewAlbumReleases } from "../../services/newReleases";

// COMPONENTS
import Feed from "../feeds/Feed";

function NewReleasesFeed() {
  return (
    <section>
      <Feed
        qkey="newReleases"
        qfn={getNewAlbumReleases}
        truncType="few"
        headerTitle="New Album Releases"
        headerLinkText="See more"
        headerLink="/new-album-releases"
      />
    </section>
  );
}
export default NewReleasesFeed;
