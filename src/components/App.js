import MainContainer from "./MainContainer";
import HeaderComponent from "./HeaderComponent";
import Section from "./Section";
import FeaturesOfPlanning from "./FeaturesOfPlanning";
import AdvantagesOfTheComplex from "./AdvantagesOfTheComplex";
import Gallery from "./Gallery";
import Infrastructure from "./Infrastructure";
import Map from "./Map";
import ConsultationForm from "./СonsultationForm";

import Footer from "./Footer";

const App = () => {
  return (
    <MainContainer>
      <HeaderComponent />
      <Section
        id="features"
        ispadding="false"
        titledirect="left"
        title="Особливості планування"
      >
        <FeaturesOfPlanning />
      </Section>
      <Section
        id="advantages"
        ispadding="true"
        titledirect="right"
        title="Переваги комплексу"
      >
        <AdvantagesOfTheComplex />
      </Section>
      <Section id="gallery" ispadding="true" titledirect="left" title="Галерея">
        <Gallery />
      </Section>
      <Section
        id="infrastructure"
        ispadding="true"
        titledirect="right"
        title="Інфраструктура"
      >
        <Infrastructure />
      </Section>
      <Section
        id="location"
        ispadding="false"
        titledirect="left"
        title="Місце розташування"
      >
        <Map />
      </Section>
      <Section
        id="consultation"
        ispadding="true"
        titledirect="right"
        title="Отримати консультацію"
      >
        <ConsultationForm />
      </Section>
      <Footer />
    </MainContainer>
  );
};

export default App;
