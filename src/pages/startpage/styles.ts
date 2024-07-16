import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10rem;
`;

export const TitleContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
`;

export const TextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`;

export const AddFirstTaskButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

export const CircleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  clip-path: circle(50%);
  background-color: #1294f2;
  border: none;
`;
