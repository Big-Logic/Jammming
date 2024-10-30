import styled from "styled-components";
import TokenRequestButton from "../components/connectToSpotify/TokenRequestButton";
import Logo from "../components/Logo";

// Styled Components

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
`;

const H1 = styled.h1`
  font-size: 4.5rem;
  line-height: 0;
  margin-top: 2rem;
`;

const P = styled.p`
  font-size: 1.6rem;
`;

function ConnectToSpotify() {
  return (
    <MainContainer>
      <Logo />
      <H1>Welcome to Jammming!</H1>
      <P>Your personal spotify assistance.</P>
      <TokenRequestButton />
    </MainContainer>
  );
}
export default ConnectToSpotify;
