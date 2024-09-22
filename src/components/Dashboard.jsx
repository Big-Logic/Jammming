import { Navigate } from "react-router-dom";
import { checkTokenAvailability } from "../utils/extraToken";
import styled from "styled-components";

// Components imports
import Logo from "./Logo";
import LikedSongs from "./LikedSongs";
import Playlists from "./Playlists";
import RenderViewAndSearchBar from "./RenderViewAndSearchBar";
import { useEffect, useState } from "react";

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

function Dashboard() {
  return (
    <>
      {/* <Section>
        <Logo />
        <Container>
          <Playlists />
          <RenderViewAndSearchBar />
          <LikedSongs />
        </Container>
      </Section> */}
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
export default Dashboard;
