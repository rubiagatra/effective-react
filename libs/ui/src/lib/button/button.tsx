import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fafafa;
  border-radius: 4px;

  &:hover {
    background-color: #80a8e2;
    border-color: #0e2147;
  }
`;

export function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
