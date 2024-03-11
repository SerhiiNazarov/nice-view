import styled from "styled-components";
import { ReactComponent as LogoFooter } from "../../assets/svg/logo-footer.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Youtube } from "../../assets/svg/youtube.svg";
import { ReactComponent as Telegram } from "../../assets/svg/fontisto_telegram.svg";

export const FooterWrp = styled.footer`
  margin-top: 120px;
  background: #776d67;
  padding: 32px 16px 40px 16px;

  @media screen and (min-width: 768px) {
    margin-top: 200px;
    padding: 40px 60px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 150px;
    padding: 24px 60px 46px 60px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-columns: auto auto;
  grid-gap: 24px 0;

  @media screen and (min-width: 768px) {
    grid-gap: 64px 0;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 8px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

export const Title = styled.h2`
  color: #dde5e8;
  font-family: "Roboto Condensed";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.04em;
  text-align: left;
  margin-bottom: 2px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 16px;
    margin-left: 8px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #dde5e8;
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  text-align: left;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Txt = styled.p`
  color: #dde5e8;
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Address = styled.address`
  color: #dde5e8;
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  text-align: left;
  font-style: normal;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #5597c1;
  font-family: "Nunito";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.05em;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    font-weight: 400;
    line-height: 66px;
  }
`;

export const LogoIcon = styled(LogoFooter)`
  width: 120px;
  height: 110px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 1440px) {
    width: 120px;
    height: 110px;
  }
`;

export const SocLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 48px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    display: none;
  }
`;

export const SocLink = styled.a`
  text-decoration: none;
  padding: 8px;

  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

export const InstagramIcon = styled(Instagram)`
  width: 24px;
  height: 24px;

  &:hover path {
    transition: stroke 0.5s ease;
    stroke: #d0ba91;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const FacebookIcon = styled(Facebook)`
  width: 24px;
  height: 24px;

  &:hover path {
    transition: stroke 0.5s ease;
    stroke: #d0ba91;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const TelegramIcon = styled(Telegram)`
  width: 24px;
  height: 24px;

  &:hover path {
    transition: stroke 0.5s ease;
    stroke: #d0ba91;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const YoutubeIcon = styled(Youtube)`
  width: 22px;
  height: 18px;

  &:hover path {
    transition: stroke 0.5s ease;
    stroke: #d0ba91;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const SocDescWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 111px;
  }
`;

export const SocLinksContainerDesc = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const LinksContainerDesc = styled.div`
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
  }
`;
