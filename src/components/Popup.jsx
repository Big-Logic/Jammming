import styled from "styled-components";
import usePopup from "../hooks/usePopup";

const PopupContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Popup() {
  const { showPopup, popupComponent, handleHidePopup } = usePopup();
  function handleClick(e) {
    if (e.target.closest("#create__playlist__container")) return;
    handleHidePopup();
  }
  if (!showPopup) return null;

  return (
    <PopupContainer onClick={handleClick}>{popupComponent}</PopupContainer>
  );
}
export default Popup;
