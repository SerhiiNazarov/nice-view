import styled from "styled-components";

export const Btn = styled.button`
  width: 100%;
  max-width: 320px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 16px 0;
  color: #2b9ee7;
  background: #c9e4ea;
  font-family: "Roboto Condensed";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.04em;
  transition: all 0.5s ease;

  border-radius: 20px;
  border: 2px solid #2b9ee7;

  &:hover {
    color: #2e688d;
    background: #6cafd9;
    box-shadow: 2px 2px 10px 0px #00000080;
  }

  @media screen and (min-width: 768px) {
    display: block;
    max-width: 400px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 480px;
  }
`;
