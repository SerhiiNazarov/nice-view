import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  text-align: left;
`;

export const ImagesWrapper = styled.div`
  margin-top: 8px;
  display: grid;
  grid-gap: 8px 12px;
  grid-template-columns: repeat(4, 1fr);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;

  &:nth-child(5),
  &:nth-child(7) {
    margin-top: calc(-45%);
  }
`;
