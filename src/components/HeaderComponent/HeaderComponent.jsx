import {
  Container,
  Header,
  SelectLng,
  Logo,
  LogoIcon,
  MenuIcon,
  MenuLngSelectWrapper,
  BottomTitleWrapper,
  BottomTitle,
  LeftWrp,
  HeaderTitle,
  RightWrp,
  NavContainer,
  Link,
  FeedbackMenuWrp,
  FeedbackRightWrp,
} from "./HeaderComponent.styled";
import FeedbackMenu from "./FeedbackMenu";

const lngsOpt = [
  { value: "en", label: "EN" },
  { value: "ua", label: "UA" },
];

const HeaderComponent = () => {
  return (
    <Container>
      <Header>
        <LeftWrp>
          <Logo>
            <LogoIcon />
            <span>Nice View</span>
          </Logo>
          <HeaderTitle>м.Київ, просп. Вознесенський 148</HeaderTitle>
        </LeftWrp>
        <RightWrp>
          <NavContainer>
            <Link>Головна</Link>
            <Link>Про нас</Link>
            <Link>Контакти</Link>
          </NavContainer>
          <MenuLngSelectWrapper>
            <SelectLng
              defaultValue={lngsOpt[1]}
              //   onChange={handleChangeLanguage}
              options={lngsOpt}
              className="сustom-select-container"
              classNamePrefix="сustom-select"
              isSearchable={false}
            />
            <MenuIcon />
          </MenuLngSelectWrapper>
        </RightWrp>
      </Header>
      <FeedbackMenuWrp>
        <FeedbackMenu />
        <FeedbackRightWrp />
      </FeedbackMenuWrp>

      <BottomTitleWrapper>
        <BottomTitle>м.Київ, просп. Вознесенський 148</BottomTitle>
      </BottomTitleWrapper>
    </Container>
  );
};

export default HeaderComponent;
