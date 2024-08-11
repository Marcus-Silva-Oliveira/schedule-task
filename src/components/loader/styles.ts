import styled from 'styled-components';
interface LoaderProps {
  show: boolean;
}

export const LoaderContainer = styled.div<LoaderProps>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: #000000ad;
  top: 0;
  bottom: 0;
  display: ${(p: LoaderProps) => (p.show ? 'flex;' : 'none;')}
  align-items: center;
  justify-content: center;

  > img {
    width: 40px;
  }
`;
