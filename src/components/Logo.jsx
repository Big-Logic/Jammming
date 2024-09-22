import styled from "styled-components";

import logoImg from "./../assets/jammming-logo-crop.png";

const LogoContainer = styled.div`
  text-align: center;
`;

const LG = styled.img`
  max-width: 230px;
`;
function Logo() {
  return (
    <LogoContainer>
      <LG src={logoImg} />
    </LogoContainer>
  );
}
export default Logo;
