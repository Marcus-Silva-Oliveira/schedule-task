// import { Link } from 'react-router-dom';

import * as S from "./styles";


export const NavBar = () => {
  return (
    <S.NavContainer>
      <S.NavButtonsContainer>
        <S.MenuButton>
          {/* Adicionar o SVG */}
          M
        </S.MenuButton>
        <S.ButtonAddTask>
          Adicionar tarefa
        </S.ButtonAddTask>
      </S.NavButtonsContainer>

      <S.ActualDateContainer>
        <S.ActualDayString>
          Quinta-feira
        </S.ActualDayString>
        <S.ActualDayNumber>
          20
        </S.ActualDayNumber>
      </S.ActualDateContainer>
    </S.NavContainer>
  );
};