import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.color};
  padding: 4px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color};
  font-size: 14px;
`;
