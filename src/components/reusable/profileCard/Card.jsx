import styled from "styled-components";
import { Cont } from "../Cont";

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  ${(props) => props.$customStyle}
  background-color: #69676447;
  /* color: #fff; */
`;

function Card({ children, customStyle, imageUrl }) {
  return (
    <>
      <Section $customStyle={customStyle} $imageUrl={imageUrl}>
        <Cont>{children}</Cont>
      </Section>
    </>
  );
}
export default Card;
