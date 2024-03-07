import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  border-radius: 4px;
  background: #dde5e8;
  box-shadow: 1px 1px 2px 0px #00000026;

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    background: transparent;
    box-shadow: none;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    &:not(:first-child) {
      height: 642px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 160px;
  background: linear-gradient(
    -92.88deg,
    #dde5e8 16.92%,
    rgba(255, 255, 255, 0) 97.11%
  );

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 160px;
  min-width: 100px;
  border-radius: 4px;

  @media screen and (min-width: 1440px) {
    width: 642px;
    height: 786px;
  }
`;

export const DescrContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 1440px) {
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;

    &:nth-child(even) {
      text-align: right;
    }

    /* &:nth-child(odd) {
    } */
  }
`;

export const DescrTitle = styled.h2`
  font-family: "Nunito";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.05em;

  color: #2e688d;

  @media screen and (min-width: 1440px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 68px;
    line-height: 66px;

    /* &:nth-child(odd) {
      text-align: right;
    } */
  }
`;

export const Descr = styled.p`
  margin-top: 4px;
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  color: #324052;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
  }
`;
