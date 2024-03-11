import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../assets/svg/close-modal-icon.svg";
import mobileBg from "../../assets/img/Modal/modal-mobile-bg.png";
import descBg from "../../assets/img/Modal/modal-desctop-bg.png";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #102c5199;
  z-index: 1200;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 60px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 270px;
  }
`;

export const ModalComponent = styled.div`
  position: relative;
  border-radius: 20px;
  background: url(${mobileBg}), #fbfcfc;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 16px 16px 44px 16px;

  @media screen and (min-width: 768px) {
    border-radius: 8px;
    background: url(${descBg}), #fbfcfc;
    background-size: cover;
    background-position: center;
    padding: 20px 60px 54px 60px;
  }

  @media screen and (min-width: 1440px) {
    padding: 92px 80px 80px 80px;
  }
`;

export const IconClose = styled(CloseIcon)`
  transition: all 0.5s ease;
  &:hover {
    scale: 1.2;
  }
`;

export const ModalTitle = styled.h2`
  color: #2e688d;
  font-family: "Nunito";
  font-size: 40px;
  font-style: italic;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.05em;
  text-align: center;
  margin-top: 52px;

  @media screen and (min-width: 768px) {
    font-size: 46px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const LabelsTextWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const LabelsWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 100px;
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  color: #324052;
  font-family: "Roboto Condensed";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.04em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const Form = styled.form`
  margin-top: 4px;

  @media screen and (min-width: 1440px) {
    margin-top: 0px;
  }
`;

export const Input = styled.input`
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  text-align: left;
  border: 1px solid #ceb181;
  padding: 12px;
  border-radius: 12px;
  width: 100%;
  margin-top: 4px;
  background: #f2efea;
  color: #bfbfbf;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
    margin-top: 8px;
  }
`;

export const Text = styled.p`
  font-family: "Roboto Condensed";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.04em;
  text-align: center;
  margin-top: 4px;
  margin-bottom: 16px;
  color: #2e688d;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
    margin-top: 0px;
    margin-bottom: 24px;
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
