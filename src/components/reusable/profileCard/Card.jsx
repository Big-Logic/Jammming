import styled from "styled-components";
import { Cont } from "../Cont";

const Section = styled.section`
  background-color: bisque;
  display: flex;
  align-items: center;
  ${(props) => props.$customStyle}
`;

function Card({ children, customStyle, imageUrl }) {
  return (
    <Section $customStyle={customStyle} $imageUrl={imageUrl}>
      <Cont>{children}</Cont>
    </Section>
  );
}
export default Card;
