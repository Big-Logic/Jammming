import { Navigate } from "react-router-dom";
import styled from "styled-components";

// Utils
import { checkTokenAvailability } from "../utils/extraToken";

// Components
import Playlists from "../components/dashboard/Playlists";
import LikedSongs from "../components/dashboard/LikedSongs";
import SearchBar from "../components/SearchBar";
import RenderView from "../components/dashboard/RenderView";

// Styled components
const Section = styled.section`
  background-color: #f7f7f7;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 20fr 60fr 20fr;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  align-items: start;
  height: calc(100vh - 60px);
`;

function DashboardLayout() {
  return (
    <>
      {!checkTokenAvailability() && <Navigate to={"/connect"} replace={true} />}
      {checkTokenAvailability() && (
        <Section>
          <SearchBar />
          <Container>
            <Playlists />
            <RenderView />
            <LikedSongs />
          </Container>
        </Section>
      )}
    </>
  );
}
export default DashboardLayout;
