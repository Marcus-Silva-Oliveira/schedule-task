import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
`;

export const DivsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem 0 1rem;
  gap: 1rem;
  background-color: #ffffff;
  border-radius: 20px;
`;

export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #ffffff;
  width: auto;
  height: auto;
  border-radius: 20px;

  img {
    width: 300px;
    border-radius: 20px 20px 0 0;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background-color: #ffffff;
  padding: 1rem;
  width: auto;
  height: auto;
  border-radius: 20px;
`;
