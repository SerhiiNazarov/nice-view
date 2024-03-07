import AdvantagesOfTheComplexItem from "./AdvantagesOfTheComplexItem";
import { Container, List } from "./AdvantagesOfTheComplex.styled";
import { advantagesOfTheComplexList } from "../../utils/advantagesOfTheComplexList";

const AdvantagesOfTheComplex = () => {
  return (
    <Container>
      <List>
        {advantagesOfTheComplexList.map((item) => (
          <AdvantagesOfTheComplexItem key={item.id} item={item} />
        ))}
      </List>
    </Container>
  );
};

export default AdvantagesOfTheComplex;
