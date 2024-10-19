import styled from "styled-components";
import usePopup from "../../hooks/usePopup";
import ClosePopupButton from "./ClosePopupButton";

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

const ContentContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 400px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 4rem 2rem;
`;

function Popup() {
  const { showPopup, popupComponent, handleHidePopup } = usePopup();
  function handleClick(e) {
    if (e.target.closest("#popup__content__container")) return;
    handleHidePopup();
  }
  if (!showPopup) return null;

  return (
    <PopupContainer onClick={handleClick}>
      <ContentContainer id="popup__content__container">
        <ClosePopupButton />
        {popupComponent}
      </ContentContainer>
    </PopupContainer>
  );
}
export default Popup;
