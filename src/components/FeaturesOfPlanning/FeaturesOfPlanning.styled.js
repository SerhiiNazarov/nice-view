import styled from "styled-components";

export const Container = styled.div`
  /* margin: 0 -32px; */

  @media screen and (min-width: 768px) {
    padding: 0 16px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    padding: 0;
    display: flex;

    align-items: center;
    gap: 72px;
  }
`;

export const ItemContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.$isbottomcont && `row-reverse`};
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 85px;
    margin-top: ${(props) => props.$isbottomcont && `24px`};
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    flex-direction: ${(props) => props.$isbottomcont && `row`};
  }
`;

export const ContentWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 16px;
  }
`;

export const Content = styled.div``;

export const Image = styled.img`
  width: 146px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px 0px #00000080;

  @media screen and (min-width: 768px) {
    width: 240px;
    height: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 450px;
    height: 628px;

    ${(props) =>
      props.$isbottomcont &&
      `position: absolute;
      top: 262px;
      left: 258px;
      z-index: -1;
      `}
  }
`;

export const Number = styled.span`
  font-family: "Nunito";
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.05em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 56px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 68px;
    line-height: 66px;
  }
`;

export const Txt = styled.p`
  font-family: "Roboto Condensed";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.04em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
    line-height: 56px;
  }
`;

export const ImagesDescWrp = styled.div`
  display: none;
  position: relative;
  width: 708px;
  height: 890px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const ContentDescWrp = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
  }
`;
