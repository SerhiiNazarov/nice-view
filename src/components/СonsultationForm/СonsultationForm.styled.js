import styled from "styled-components";
import { Form, Field } from "formik";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h3`
  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;
  color: #324052;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    margin-left: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
    margin-left: 8px;
    margin-top: 20px;
  }
`;

export const FormField = styled(Form)`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 32px;
    width: 1080px;
    gap: 40px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: "Roboto Condensed";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.04em;
  color: #324052;

  span {
    margin-left: 8px;

    @media screen and (min-width: 768px) {
      margin-left: 16px;
    }

    @media screen and (min-width: 768px) {
      margin-left: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 12px;
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 0;
    font-size: 24px;
    line-height: 36px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Input = styled(Field)`
  height: 48px;
  border: 2px solid #161614;
  border-radius: 8px;
  padding: 14px 16px;
  background: #fbfcfc;

  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    height: 68px;
    font-size: 24px;
    line-height: 36px;
    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) {
    height: 60px;
    width: 862px;
    padding: 12px 24px;
  }
`;

export const BtnWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    margin-left: 200px;
  }
`;
