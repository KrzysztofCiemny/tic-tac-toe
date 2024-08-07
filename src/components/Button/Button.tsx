import { ButtonStyled } from './Button.styles';

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled type="button">{children}</ButtonStyled>;
};
