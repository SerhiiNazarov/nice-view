import React, { useState, useEffect } from "react";
import {
  Container,
  ItemContainer,
  Image,
  Number,
  ContentWrp,
  Content,
  Txt,
  ImagesDescWrp,
  ContentDescWrp,
} from "./FeaturesOfPlanning.styled";
import townImage1 from "../../assets/img/pexels-otoniel-alvarado.jpg";
import townImage2 from "../../assets/img/pexels-vladimir.jpg";

const FeaturesOfPlanning = () => {
  const [showDescComponent, setShowDescComponent] = useState(
    window.innerWidth >= 1440
  );

  useEffect(() => {
    const handleResize = () => {
      setShowDescComponent(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!showDescComponent && (
        <Container>
          <ItemContainer>
            <Image src={townImage1} alt="town" />
            <ContentWrp>
              <Content>
                <Number style={{ color: "#2e688d" }}>88</Number>
                <Txt style={{ color: "#2e688d" }}>сучасних квартир</Txt>
              </Content>
              <Content>
                <Number style={{ color: "#8D6515" }}>40+</Number>
                <Txt style={{ color: "#8D6515" }} color="#8D6515">
                  об’єктів інфраструктури
                </Txt>
              </Content>
            </ContentWrp>
          </ItemContainer>
          <ItemContainer $isbottomcont="true">
            <Image src={townImage2} alt="town" />
            <ContentWrp>
              <Content>
                <Number style={{ color: "#8D6515" }}>300</Number>
                <Txt style={{ color: "#8D6515" }}>задоволених власників</Txt>
              </Content>
              <Content>
                <Number style={{ color: "#2e688d" }}>5</Number>
                <Txt style={{ color: "#2e688d" }}>успішних проектів</Txt>
              </Content>
            </ContentWrp>
          </ItemContainer>
        </Container>
      )}
      {showDescComponent && (
        <Container>
          <ImagesDescWrp>
            <Image src={townImage1} alt="town" />
            <Image $isbottomcont="true" src={townImage2} alt="town" />
          </ImagesDescWrp>
          <ContentDescWrp>
            <ContentWrp>
              <Content>
                <Number style={{ color: "#2e688d" }}>88</Number>
                <Txt style={{ color: "#2e688d" }}>сучасних квартир</Txt>
              </Content>
              <Content>
                <Number style={{ color: "#8D6515" }}>40+</Number>
                <Txt style={{ color: "#8D6515" }} color="#8D6515">
                  об’єктів інфраструктури
                </Txt>
              </Content>
            </ContentWrp>
            <ContentWrp $isbottomcont="true">
              <Content>
                <Number style={{ color: "#8D6515" }}>300</Number>
                <Txt style={{ color: "#8D6515" }}>задоволених власників</Txt>
              </Content>
              <Content>
                <Number style={{ color: "#2e688d" }}>5</Number>
                <Txt style={{ color: "#2e688d" }}>успішних проектів</Txt>
              </Content>
            </ContentWrp>
          </ContentDescWrp>
        </Container>
      )}
    </>
  );
};

export default FeaturesOfPlanning;
