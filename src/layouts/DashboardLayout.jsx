import { Navigate } from "react-router-dom";
import styled from "styled-components";

// Utils
import { checkTokenAvailability } from "../utils/extraToken";

// Components
import Logo from "../components/Logo";
import LikedSongs from "../features/LikedSongs";
import RenderViewAndSearchBar from "./RenderViewAndSearchBar";
import Playlists from "../features/Playlists";

// Styled components
const Section = styled.section`
  padding: 2rem 0;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 20fr 60fr 20fr;
  width: 100%;
  gap: 1rem;
  padding: 2rem;
`;

function DashboardLayout() {
  return (
    <>
      {!checkTokenAvailability() && <Navigate to={"/connect"} />}
      {checkTokenAvailability() && (
        <Section>
          <Logo />
          <Container>
            <Playlists />
            <RenderViewAndSearchBar />
            <LikedSongs />
          </Container>
        </Section>
      )}
    </>
  );
}
export default DashboardLayout;
