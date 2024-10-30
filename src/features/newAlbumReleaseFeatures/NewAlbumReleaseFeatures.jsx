// SERVICES
import { getNewAlbumReleases } from "../../services/newReleases";

// COMPONENTS
import Feed from "../../components/feeds/Feed";

function NewAlbumReleaseFeatures() {
  return (
    <section>
      <Feed
        qkey="newReleases"
        qfn={getNewAlbumReleases}
        headerTitle="New Album Releases"
      />
    </section>
  );
}
export default NewAlbumReleaseFeatures;
