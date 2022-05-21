import styled, { ButtonVariant } from 'styled-components';

interface ButtonProps {
  variant: ButtonVariant;
}

const Button = styled.button<ButtonProps>`
  color: ${({ theme, variant }) => theme.buttonTextColor[variant]};
  background-color: ${({ theme, variant }) => theme.buttonColor[variant]};
  border: 1px solid ${({ theme, variant }) => theme.buttonBorderColor[variant]};
  border-radius: 4px;
  font-size: 14px;
  padding: 4px 8px;
`;

export default Button;
