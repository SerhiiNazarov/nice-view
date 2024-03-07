import { Container, Content, SectionTitle } from "./Section.styled";

const Section = ({ children, id, ispadding, titledirect, title }) => {
  return (
    <Container id={id}>
      <SectionTitle $titledirect={titledirect}>{title}</SectionTitle>
      <Content id={id} $ispadding={ispadding}>
        {children}
      </Content>
    </Container>
  );
};

export default Section;
