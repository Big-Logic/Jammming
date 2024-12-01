import {
  CardRow,
  DurationColumn,
  IndexColumn,
  TitleGridColumn,
} from "../../../reusable/profileCard/CardBodyItems";

function AlbumItem({ data, index, imageUrl }) {
  return (
    <CardRow>
      <IndexColumn>{index}</IndexColumn>
      <TitleGridColumn
        image={imageUrl}
        id={data.id}
        artists={data.artists}
        name={data.name}
      />
      <DurationColumn durationMs={data.durationMs} />
    </CardRow>
  );
}

export default AlbumItem;
