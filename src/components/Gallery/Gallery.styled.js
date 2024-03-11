import styled from "styled-components";
import { ReactComponent as ArrovLeft } from "../../assets/svg/arrov-left.svg";
import { ReactComponent as ArrovRight } from "../../assets/svg/arrov-right.svg";

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
  background: transparent;
  border: none;
`;

export const IconLeft = styled(ArrovLeft)`
  width: 48px;
  height: 45px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const IconRight = styled(ArrovRight)`
  width: 48px;
  height: 45px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px 0px #00000080;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
