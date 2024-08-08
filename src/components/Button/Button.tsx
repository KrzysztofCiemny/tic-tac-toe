import { ButtonStyled } from './Button.styles';

type ButtonProps = {
  children: React.ReactNode;
  send: any;
};

export const Button = ({ children, send }: ButtonProps) => {
  return (
    <ButtonStyled type="button" onClick={() => send({ type: 'RESET' })}>
      {children}
    </ButtonStyled>
  );
};
