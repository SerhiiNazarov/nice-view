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
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TelegramIcon,
  SocDescWrapper,
  SocLinksContainerDesc,
  LinksContainerDesc,
} from "./Footer.styled";

import youtubeLinkDesc from "../../assets/img/Footer-soc-links/youtube-link-desc.png";
import instagramLinkDesc from "../../assets/img/Footer-soc-links/instagram-link-desc.png";
import facebookLinkDesc from "../../assets/img/Footer-soc-links/facebook-link-desc.png";
import telegramLinkDesc from "../../assets/img/Footer-soc-links/telegram-link-desc.png";

const Footer = () => {
  return (
    <FooterWrp>
      <Container>
        <NavContainer>
          <Link href="#">
            <Title>Головна</Title>
          </Link>
          <Link href="#features">Особливості планування</Link>
          <Link href="#advantages">Переваги</Link>
          <Link href="#gallery">Галерея</Link>
          <Link href="#infrastructure">Інфраструктура</Link>
          <Link href="#location">Розташування</Link>
        </NavContainer>
        <NavContainer>
          <Title>Покупцям</Title>
          <Link href="#consultation">Замовити консультацію</Link>
          <Link href="#location">Контакти офісу компанії</Link>
        </NavContainer>
        <SocDescWrapper>
          <NavContainer>
            <Address>
              Адреса центрального офісу: м.Київ, вул. Соборності 12
            </Address>
            <Txt>Робочі дні: понеділок - п’ятниця з 09:00 до 18:00</Txt>
            <Txt>Вихідні дні: субота - неділя та святкові дні</Txt>
            <Txt>Телефон менеджера: +380981194159</Txt>
          </NavContainer>
          <SocLinksContainerDesc>
            <Txt>Соціальні мережі:</Txt>
            <LinksContainerDesc>
              <Link>
                <img src={youtubeLinkDesc} alt="youtube link" />
              </Link>
              <Link>
                <img
                  style={{ marginTop: "16px" }}
                  src={instagramLinkDesc}
                  alt="instagram link"
                />
              </Link>
              <div
                style={{ display: "flex", columnGap: "12px", marginTop: "6px" }}
              >
                <Link>
                  <img src={facebookLinkDesc} alt="facebock link" />
                </Link>
                <Link>
                  <img src={telegramLinkDesc} alt="telegram link" />
                </Link>
              </div>
            </LinksContainerDesc>
          </SocLinksContainerDesc>
        </SocDescWrapper>
        <Logo>
          <LogoIcon />
          <span>Nice View</span>
        </Logo>
      </Container>
      <SocLinksContainer>
        <SocLink>
          <InstagramIcon />
        </SocLink>
        <SocLink>
          <FacebookIcon />
        </SocLink>
        <SocLink>
          <YoutubeIcon />
        </SocLink>
        <SocLink>
          <TelegramIcon />
        </SocLink>
      </SocLinksContainer>
    </FooterWrp>
  );
};

export default Footer;
