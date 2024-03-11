import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../assets/svg/close-modal-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  position: relative;

  @media screen and (min-width: 768px) {
    row-gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 0;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin-top: 34px;
  }
`;

export const MapContainer = styled.div`
  height: ${(props) => (props.$isfullScreen ? `100vh` : `281px`)};
  width: ${(props) => (props.$isfullScreen ? `100vw` : `100%`)};

  @media screen and (min-width: 768px) {
    height: ${(props) => (props.$isfullScreen ? `100vh` : `440px`)};
  }

  @media screen and (min-width: 1440px) {
    width: 872px;
    height: 526px;
    border-radius: 20px;
    border: 1px solid #ceb181;
    overflow: hidden;
  }
`;

export const Description = styled.div`
  display: ${(props) => (props.$isfullScreen ? `none` : `flex`)};
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px 8px 4px 16px;
  background: #efe8dd;
  flex-direction: column;
  row-gap: 4px;

  @media screen and (min-width: 768px) {
    row-gap: 16px;
    padding: 8px 32px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 8;
    padding: 0;
    background: transparent;
    position: static;
  }
`;

export const DescriptionTxt = styled.h4`
  background: #324052;
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  background: transparent;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const BtnContainer = styled.div`
  display: block;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  padding: 0;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;

  @media screen and (min-width: 1440px) {
    top: 16px;
    right: 16px;
  }
`;

export const IconClose = styled(CloseIcon)`
  transition: all 0.5s ease;
  &:hover {
    scale: 1.2;
  }
`;
