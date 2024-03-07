import styled from "styled-components";

export const Container = styled.div`
  display: block;
  padding: 16px;
  border-radius: 20px;
  margin: 0 16px;
  box-shadow: 2px 2px 40px 0px #00000080;
  background: #fbfcfccc;

  @media screen and (min-width: 768px) {
    padding: 40px;
    margin: 0 110px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    margin: 0 60px;
    box-shadow: none;
  }
`;

export const MenuTitle = styled.h2`
  color: #2e688d;
  font-family: "Nunito";
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.05em;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 56px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 68px;
    line-height: 66px;
    text-align: left;
  }
`;

export const MenuText = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: "Roboto Condensed";
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.04em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 56px;
  }
`;
