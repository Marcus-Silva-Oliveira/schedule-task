import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  padding: 12px;
  line-height: 1;
  height: 2.87rem;
  width: fit-content;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    filter: brightness(1.1);
  }
`;
