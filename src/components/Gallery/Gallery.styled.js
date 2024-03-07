import styled from "styled-components";
import { ReactComponent as ArrovLeft } from "../../assets/svg/arrov-left.svg";
import { ReactComponent as ArrovRight } from "../../assets/svg/arrov-right.svg";
import { ReactComponent as ArrovLeftDesc } from "../../assets/svg/arrov-left-desc.svg";
import { ReactComponent as ArrovRightDesc } from "../../assets/svg/arrov-right-desc.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Btn = styled.button`
  border: none;
  background: transparent;
`;

export const IconLeft = styled(ArrovLeft)`
  width: 48px;
  height: 45px;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const IconRight = styled(ArrovRight)`
  width: 48px;
  height: 45px;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const IconLeftDesc = styled(ArrovLeftDesc)`
  display: none;
  width: 48px;
  height: 45px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const IconRightDesc = styled(ArrovRightDesc)`
  display: none;
  width: 48px;
  height: 45px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px 0px #00000080;
`;
