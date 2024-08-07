import styled from 'styled-components';

export const LoaderContainer = styled.div<{
  show: boolean;
}>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: #000000ad;
  top: 0;
  bottom: 0;
  display: ${(p: any) => (p.show ? 'flex;' : 'none;')}
  align-items: center;
  justify-content: center;

  > img {
    width: 40px;
  }
`;
