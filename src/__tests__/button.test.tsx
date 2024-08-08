import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../components/Button/Button';
import { ButtonProps } from '../types/componentProps';

describe('Button Component', () => {
  it('renders the button with correct text', () => {
    const props: ButtonProps = {
      children: 'Reset Board',
      send: jest.fn(),
    };

    render(<Button {...props} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('sends a RESET event when clicking the button ', () => {
    const sendMock = jest.fn();
    const props: ButtonProps = {
      children: 'Reset Board',
      send: sendMock,
    };

    render(<Button {...props} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(sendMock).toHaveBeenCalledWith({ type: 'RESET' });
  });
});
