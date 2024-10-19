import styled from "styled-components";

// Icons
import { HiMiniXMark } from "react-icons/hi2";

// hooks
import usePopup from "../../hooks/usePopup";

const CpButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
`;
function ClosePopupButton() {
  const { handleHidePopup } = usePopup();
  return (
    <CpButton onClick={() => handleHidePopup()}>
      <HiMiniXMark />
    </CpButton>
  );
}

export default ClosePopupButton;
