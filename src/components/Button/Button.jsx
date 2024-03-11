import { Btn } from "./Button.styled";

const Button = ({ children, type, onClick }) => {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
