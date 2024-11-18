import styled from "styled-components";

export const DashboardSection = styled.section`
  background-color: #fff;
  border-radius: 1rem;
  /* padding: 2rem; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: inherit;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a8a8a8;
    border-radius: 10px;
  }
`;
