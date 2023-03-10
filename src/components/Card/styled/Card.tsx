import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const ContentWrapper = styled.div`
  padding: 4px;
`;

export const CardWrapper = styled.div`
  display: flex;
  min-height: 200px;
  height: 95%;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  color: ${({ theme }) => theme.color};
  flex-direction: column;
  align-items: center;
  margin: 8px;
  cursor: pointer;
  box-shadow: ${({ theme }) => ` 0px 0px 2px 1px ${theme.color}`};
  &:hover {
    transform: scale(1.01);
  }
`;

export const CardTitle = styled.div`
  display: flex;
  font-size: 30px;
  padding: 4px;
`;

export const CardSubtitle = styled.div`
  display: flex;
  font-size: 24px;
  padding: 4px;
`;
