import styled from "styled-components";

export const Input = styled.input`
  font-size: 16px;
  line-height: 1.5;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 19 19'><path fill='%23838D99' d='M13.98 12.57a2 2 0 0 1 1.93.52l2.5 2.5a2 2 0 0 1-2.82 2.82l-2.5-2.5a2 2 0 0 1-.52-1.93l-1.38-1.37a7 7 0 1 1 1.42-1.42l1.37 1.38zm-3.37-2.03a5 5 0 1 0-7.08-7.08 5 5 0 0 0 7.08 7.08z'></path></svg>");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 20px 20px;
  border: 1px solid #c5cbd5;
  border-radius: 8px;
  width: 300px;
  padding: 8px;
  padding-left: 34px;

  &::placeholder {
    color: #838d99;
  }

  &:focus {
    outline: none;
  }
`;
