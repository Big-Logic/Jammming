import { Cont } from "../../../reusable/Cont";
import PlaylistItem from "./PlaylistItem";
import PlaylistItemsHeader from "./PlaylistItemsHeader";

function PlaylistItems({ data }) {
  //
  if (data.tracks.length === 0) {
    return (
      <section>
        <h2>Empty Playlist</h2>
      </section>
    );
  }
  //
  return (
    <section>
      <Cont>
        <PlaylistItemsHeader />
        {data.tracks.map((item, i) => (
          <PlaylistItem data={item} key={item.id} index={i + 1} />
        ))}
      </Cont>
    </section>
  );
}

export default PlaylistItems;
