import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    margin-left: 76px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-top: 24px;
  }
`;

export const ImagesWrapper = styled.div`
  margin-top: 8px;
  display: grid;
  grid-gap: 8px 12px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (min-width: 768px) {
    grid-gap: 16px 16px;
  }

  @media screen and (min-width: 1440px) {
    grid-gap: 16px 18px;
  }
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
