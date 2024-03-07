import { Container, MenuTitle, MenuText } from "./FeedbackMenu.styled";
import Button from "../../Button";

const FeedbackMenu = () => {
  return (
    <Container>
      <MenuTitle>ЖК “Nice view”</MenuTitle>
      <MenuText>
        При 100% оплаті знижка 5% від банку. Пропозиція дійсна до 31.12.22 р.
      </MenuText>
      <Button type="button">Дзвінок</Button>
    </Container>
  );
};

export default FeedbackMenu;
