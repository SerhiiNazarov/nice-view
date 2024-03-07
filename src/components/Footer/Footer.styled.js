import styled from "styled-components";
import { ReactComponent as LogoFooter } from "../../assets/svg/logo-footer.svg";

export const FooterWrp = styled.footer`
  margin-top: 120px;
  background: #776d67;
  padding: 32px 16px 40px 16px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-columns: auto auto;
  grid-gap: 24px 0;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 8px;
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
`;

export const Txt = styled.p`
  color: #dde5e8;
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  text-align: left;
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
`;

export const LogoIcon = styled(LogoFooter)`
  width: 120px;
  height: 110px;
  stroke: #d0ba91;
  fill: #d0ba91;
  color: #d0ba91;
`;

export const SocLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 4px;
`;

export const SocLink = styled.a`
  text-decoration: none;
  padding: 8px;
`;
