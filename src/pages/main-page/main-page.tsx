// import { addIcon } from '../../assets/Icons/Add.svg';

import React from 'react';
import * as S from './styles';

export const MainPage: React.FC = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Bem vindo!</h1>
      </S.TitleContainer>
      <S.TextContainer>
        <h2>
          Para iniciar, crie sua primeira tarefa, clicando no botão abaixo:
        </h2>
      </S.TextContainer>
      <S.AddFirstTaskButtonContainer>
        <S.CircleButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="80px"
            fill="#ffffff"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </S.CircleButton>
      </S.AddFirstTaskButtonContainer>
    </S.Container>
  );
};
