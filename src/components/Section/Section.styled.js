import styled from "styled-components";

export const Container = styled.section`
  margin-top: 56px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 120px;
  }
`;

export const Content = styled.div`
  padding-left: ${(props) => props.$ispadding === "true" && `16px`};
  padding-right: ${(props) => props.$ispadding === "true" && `16px`};
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    padding-left: ${(props) => props.$ispadding === "true" && `60px`};
    padding-right: ${(props) => props.$ispadding === "true" && `60px`};
    margin-top: 32px;

    ${(props) => props.id === "features" && `padding: 0 60px;`}
    ${(props) => props.id === "infrastructure" && `padding: 0;`}
  }

  @media screen and (min-width: 1440px) {
    margin-top: 24px;
    padding: 0 60px;
  }
`;

export const SectionTitle = styled.h2`
  position: relative;
  display: grid;
  align-items: center;
  gap: 16px;
  grid-template-columns: ${(props) =>
    props.$titledirect === "left" ? `auto 1fr` : `1fr auto`};
  font-family: "Nunito";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.05em;

  ${(props) =>
    props.$titledirect === "left"
      ? ` margin-left: 24px;
      
    @media screen and (min-width: 768px) {
    margin-left: 60px;
    margin-right: 60px;
  }

   @media screen and (min-width: 1440px) {
    margin: 0;
  }
       `
      : ` margin-right: 24px;
      
    @media screen and (min-width: 768px) {
    margin-right: 60px;
    margin-left: 60px;
  }

     @media screen and (min-width: 1440px) {
    margin: 0;
  }
      `};

  ${(props) =>
    props.$titledirect === "left"
      ? `
    &::after {
      content: "";
      height: 3px;
      border-radius: 50px;
      background-color: #CEB181;
    }
  `
      : `
    &::before {
      content: "";
      height: 3px;
      border-radius: 50px;
      background-color: #CEB181;
    }

    
  `}

  @media screen and (min-width: 768px) {
    gap: 32px;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: auto;
    justify-content: center;

    &::before {
      display: none;
    }

    &::after {
      position: absolute;
      top: calc(100% + 8px);
      content: "";
      height: 3px;
      width: 936px;
      border-radius: 50px;
      background-color: #ceb181;
      ${(props) => props.$titledirect === "left" && `right: 0;`}
    }
  }
`;
