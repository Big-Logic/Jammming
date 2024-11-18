import styled from "styled-components";

import logoImg from "./../assets/jammming-logo-crop.png";

const LG = styled.img`
  max-width: 230px;
`;
function Logo() {
  return <LG src={logoImg} />;
}
export default Logo;
