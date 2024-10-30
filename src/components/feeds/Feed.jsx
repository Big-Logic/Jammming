import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

// COMPONENTS
import FeedItem from "./FeedItem";
import FeedHeader from "./FeedHeader";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

function Feed({
  qkey,
  qfn,
  truncType = "all",
  headerTitle,
  headerLinkText,
  headerLink = "",
}) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: [qkey],
    queryFn: qfn,
    refetchOnMount: false,
  });

  let sliceEnd = 0;

  if (data) {
    sliceEnd = truncType == "few" ? 4 : truncType === "all" ? data.length : 0;
  }

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data && (
        <>
          <FeedHeader
            headerTitle={headerTitle}
            headerLinkText={headerLinkText}
            headerLink={headerLink}
            sliceEnd={sliceEnd}
            dataLength={data.length}
          />
          <Content>
            {data.slice(0, sliceEnd).map((dt) => (
              <FeedItem data={dt} key={dt.id} />
            ))}
          </Content>
        </>
      )}
    </>
  );
}
export default Feed;
