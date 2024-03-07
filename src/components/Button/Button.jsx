import { Btn } from "./Button.styled";

const Button = ({ children, type }) => {
  return <Btn type={type}>{children}</Btn>;
};

export default Button;
