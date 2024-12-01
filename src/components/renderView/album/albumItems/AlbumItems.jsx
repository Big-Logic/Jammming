import { Cont } from "../../../reusable/Cont";
import AlbumItem from "./AlbumItem";
import AlbumItemsHeader from "./AlbumItemsHeader";

function AlbumItems({ data }) {
  return (
    <section>
      <Cont>
        <AlbumItemsHeader />
        {data.tracks.map((track, i) => (
          <AlbumItem
            key={track.id}
            data={track}
            index={i + 1}
            imageUrl={data.imageUrl}
          />
        ))}
      </Cont>
    </section>
  );
}
export default AlbumItems;
