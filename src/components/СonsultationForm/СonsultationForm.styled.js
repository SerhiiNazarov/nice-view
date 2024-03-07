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
  margin-left: 8px;
  color: #324052;
`;

export const FormField = styled(Form)`
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`;

export const Input = styled(Field)`
  height: 48px;
  border: 1px solid #161614;
  border-radius: 8px;
  padding: 14px, 16px;
  background: #fbfcfc;
`;
