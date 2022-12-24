import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  display: flex;
  height: 700px;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  color: ${({ theme }) => theme.color};
  flex-direction: column;
  align-items: center;
`;
