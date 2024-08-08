import { ButtonStyled } from './Button.styles';
import { ButtonProps } from '../../types/componentProps';

export const Button = ({ children, send }: ButtonProps) => {
  return (
    <ButtonStyled type="button" onClick={() => send({ type: 'RESET' })}>
      {children}
    </ButtonStyled>
  );
};
