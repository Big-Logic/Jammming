// SERVICES
import { getNewAlbumReleases } from "../../services/newReleases";

// COMPONENTS
import Feed from "../feeds/Feed";

function NewAlbumReleases() {
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
export default NewAlbumReleases;
