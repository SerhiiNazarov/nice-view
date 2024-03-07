import {
  FooterWrp,
  Container,
  NavContainer,
  Title,
  Txt,
  Address,
  Link,
  Logo,
  LogoIcon,
  SocLinksContainer,
  SocLink,
} from "./Footer.styled";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Youtube } from "../../assets/svg/youtube.svg";
import { ReactComponent as Telegram } from "../../assets/svg/fontisto_telegram.svg";

const Footer = () => {
  return (
    <FooterWrp>
      <Container>
        <NavContainer>
          <Title>Головна</Title>
          <Link href="#features">Особливості планування</Link>
          <Link href="#advantages">Переваги</Link>
          <Link href="#gallery">Галерея</Link>
          <Link href="#infrastructure">Інфраструктура</Link>
          <Link href="#location">Розташування</Link>
        </NavContainer>
        <NavContainer>
          <Title>Покупцям</Title>
          <Link href="#consultation">Замовити консультацію</Link>
          <Link>Контакти офісу компанії</Link>
        </NavContainer>
        <NavContainer>
          <Address>
            Адреса центрального офісу: м.Київ, вул. Соборності 12
          </Address>
          <Txt>Робочі дні: понеділок - п’ятниця з 09:00 до 18:00</Txt>
          <Txt>Вихідні дні: субота - неділя та святкові дні</Txt>
          <Txt>Телефон менеджера: +380981194159</Txt>
        </NavContainer>
        <Logo>
          <LogoIcon />
          <span>Nice View</span>
        </Logo>
      </Container>
      <SocLinksContainer>
        <SocLink>
          <Instagram />
        </SocLink>
        <SocLink>
          <Facebook />
        </SocLink>
        <SocLink>
          <Youtube />
        </SocLink>
        <SocLink>
          <Telegram />
        </SocLink>
      </SocLinksContainer>
    </FooterWrp>
  );
};

export default Footer;
