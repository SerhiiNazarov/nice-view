import {
  Container,
  Title,
  ImagesWrapper,
  Image,
} from "./Infrastructure.styled";
import { infrastructureImgList } from "../../utils/infrastructureImgList";

const Infrastructure = () => {
  return (
    <Container>
      <Title>*знаходяться в радіусі 1 км від ЖК</Title>
      <ImagesWrapper>
        {infrastructureImgList &&
          infrastructureImgList.map(({ src }, ind) => (
            <Image key={ind} src={src} alt={`Image${ind}`} />
          ))}
      </ImagesWrapper>
    </Container>
  );
};

export default Infrastructure;
