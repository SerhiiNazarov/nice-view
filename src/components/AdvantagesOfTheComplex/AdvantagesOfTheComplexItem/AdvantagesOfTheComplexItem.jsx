import {
  Item,
  ImageWrapper,
  GradientOverlay,
  Image,
  DescrContainer,
  DescrTitle,
  Descr,
} from "./AdvantagesOfTheComplexItem.styled";

const AdvantagesOfTheComplexItem = ({
  item: { src, title, description, alt },
}) => {
  return (
    <Item>
      <ImageWrapper>
        <Image src={src} alt={alt} />
        <GradientOverlay />
      </ImageWrapper>

      <DescrContainer>
        <DescrTitle>{title}</DescrTitle>
        <Descr>{description}</Descr>
      </DescrContainer>
    </Item>
  );
};

export default AdvantagesOfTheComplexItem;
