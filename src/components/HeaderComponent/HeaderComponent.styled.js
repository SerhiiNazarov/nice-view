import styled from "styled-components";
import { ReactComponent as Headerlogo } from "../../assets/svg/headerLogo.svg";
import { ReactComponent as Menu } from "../../assets/svg/hambergermenu.svg";
import headerBg from "../../assets/img/Header-bg.jpg";
import headerDesc from "../../assets/img/Header_bg-desctop.png";
import Select from "react-select";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 752px;
  margin-bottom: 16px;

  background-image: url(${headerBg});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    min-height: 1080px;
    background-image: none;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 54px 16px 24px 16px;

  background: linear-gradient(
    180deg,
    #766a63 0%,
    rgba(198, 190, 187, 0.81) 150%
  );

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
  }

  @media screen and (min-width: 1440px) {
    padding: 7px 60px;
  }
`;

export const LogoIcon = styled(Headerlogo)`
  height: 44px;
  width: 42px;

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Nunito";
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.08em;
`;

export const SelectLng = styled(Select)`
  z-index: 10;

  /* @media screen and (min-width: 768px) {
    order: 3;
  } */

  /* &:hover svg {
    fill: #7b61ff;
  } */

  /* &:hover .сustom-select__single-value {
    color: #7b61ff;
  } */

  /* &:hover .сustom-select__placeholder {
    color: #7b61ff;
  } */

  svg {
    fill: #3f3f3f;
  }

  &.сustom-select-container {
    /* display: flex; */
    /* justify-content: center; */

    /* box-shadow: 2px 4px 9px 0px #a68dae47; */

    /* &:hover {
      box-shadow: 2px 4px 9px 0px #7b61ff;
    } */
  }
  .сustom-select__control {
    /* width: 73px;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 5px; */
    border: none;
    background: transparent;
  }

  .сustom-select__control--is-focused {
    box-shadow: none;
  }

  .сustom-select__indicator-separator {
    display: none;
    padding: 0;
  }

  .сustom-select__placeholder {
    color: red;
  }

  .сustom-select__input-container {
    display: none;
  }

  .сustom-select__single-value {
    color: #eee8de;
    font-family: "Roboto Condensed";
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.04em;

    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 28px;
      line-height: 36px;
    }

    /* &:focus {
      border: none;
    } */
  }

  .сustom-select__menu {
    padding: 12px 10px;
  }
  .сustom-select__menu-list {
    background: transparent;
  }
  .сustom-select__option {
    padding: 0;
    padding-bottom: 4px;

    color: #aca7c3;
    background: transparent;
    border-bottom: 1px solid #aca7c3;

    &:first-child {
      margin-bottom: 8px;
    }

    &:hover,
    &:focus {
      color: #7b61ff;
      background-color: transparent;
      border-bottom: 1px solid #7b61ff;
    }
  }

  .сustom-select__dropdown-indicator {
    display: none;
  }
  .сustom-select__option--is-selected {
    color: #8d6515;
  }
`;

export const MenuIcon = styled(Menu)`
  display: block;
  height: 42px;
  width: 42px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
    margin-left: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MenuLngSelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BottomTitleWrapper = styled.div`
  display: block;
  padding: 90px 37px 40px 37px;
  background: linear-gradient(
    2deg,
    #fbfcfc 16.92%,
    rgba(255, 255, 255, 0) 77.11%
  );

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BottomTitle = styled.h2`
  font-family: "Roboto Condensed";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.04em;
  text-align: center;
`;

export const LeftWrp = styled.div`
  display: flex;
  align-items: center;
`;

export const RightWrp = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  display: none;
  margin-left: 56px;
  color: #eee8de;
  font-family: "Roboto Condensed";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.04em;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const NavContainer = styled.nav`
  display: none;
  margin-right: 120px;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 80px;
    padding: 0 16px;
  }
`;

export const Link = styled.a`
  display: none;
  color: #eee8de;
  font-family: "Roboto Condensed";
  font-size: 18px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.04em;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 80px;
    padding: 0 16px;
  }
`;

export const FeedbackMenuWrp = styled.div`
  display: block;
  margin-top: 0;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 602px 1fr;
    height: 1000px;
    justify-content: center;
    align-items: center;

    background-image: url(${headerDesc});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const FeedbackRightWrp = styled.div`
  position: relative;
  z-index: -1;
  display: none;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 30%;

    background: linear-gradient(
      94.98deg,
      #ffffff 13.1%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @media screen and (min-width: 1440px) {
    display: block;
    height: 100%;

    background-image: url(${headerBg});
    background-repeat: no-repeat;
    background-size: cover;

    /* background: linear-gradient(
      94.98deg,
      #ffffff 8.1%,
      rgba(255, 255, 255, 0) 95.16%
    ); */
  }
`;
