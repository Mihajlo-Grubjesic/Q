import styled from 'styled-components';

export const Loader = styled.div`
  position: absolute;
  left: 50%;
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.color};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
