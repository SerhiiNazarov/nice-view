import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CirclesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Circle = styled.div`
  width: ${(props) => (props.$isSelectActive ? "13px" : "10px")};
  height: ${(props) => (props.$isSelectActive ? "13px" : "10px")};
  background: ${(props) => (props.$isSelectActive ? "#8D6515" : "#c0afa8")};
  border-radius: 50%;
`;
