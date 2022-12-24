import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  min-height: 200px;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
`;
