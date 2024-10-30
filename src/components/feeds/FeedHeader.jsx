import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 2.5rem;
`;

function FeedHeader({
  headerTitle,
  headerLinkText,
  headerLink = "",
  sliceEnd,
  dataLength,
}) {
  return (
    <Header>
      <div>
        <h2>{headerTitle}</h2>
      </div>
      <div>
        {headerLinkText && dataLength > sliceEnd && (
          <Link to={headerLink}>{headerLinkText}</Link>
        )}
      </div>
    </Header>
  );
}

export default FeedHeader;
