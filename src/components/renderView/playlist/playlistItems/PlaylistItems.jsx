import { Cont } from "../../../reusable/Cont";
import PlaylistItem from "./PlaylistItem";
import PlaylistItemsHeader from "./PlaylistItemsHeader";

function PlaylistItems({ data }) {
  return (
    <section>
      <Cont>
        <PlaylistItemsHeader />
        {data.items.map((item, i) => (
          <PlaylistItem data={item} key={item.id} index={i + 1} />
        ))}
      </Cont>
    </section>
  );
}
export default PlaylistItems;
