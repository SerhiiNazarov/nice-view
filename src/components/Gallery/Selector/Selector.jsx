import { Container, CirclesContainer, Circle } from "./Selector.styled";

const Selector = ({ galleryList, currentImageIndex }) => {
  return (
    <Container>
      <CirclesContainer>
        {galleryList &&
          galleryList.map((item, ind) => (
            <Circle key={ind} $isSelectActive={currentImageIndex === ind} />
          ))}
      </CirclesContainer>
    </Container>
  );
};

export default Selector;
