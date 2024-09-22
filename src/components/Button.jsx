import styled from "styled-components";

const Btn = styled.button`
  min-width: 150px;
  padding: 1.2rem 2rem;
  border-radius: 100px;
  margin: 1.5rem 0;
  border: 1px solid;
`;

function Button({ handler, children }) {
  return (
    <Btn
      onClick={() => {
        handler();
      }}
    >
      {children}
    </Btn>
  );
}
export default Button;
