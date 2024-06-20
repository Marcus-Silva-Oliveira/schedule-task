// import { Link } from 'react-router-dom';

import * as S from './styles';

export const NavBar = () => {
  return (
    <S.NavContainer>
      <S.NavButtonsContainer>
        <S.MenuButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="26px"
            fill="#ffffff"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </S.MenuButton>
        <S.ButtonAddTask>Adicionar tarefa</S.ButtonAddTask>
      </S.NavButtonsContainer>

      <S.ActualDateContainer>
        <S.ActualDayString>
          <p>Quinta-feira</p>
        </S.ActualDayString>
        <S.ActualDayNumber>
          <p>20</p>
        </S.ActualDayNumber>
      </S.ActualDateContainer>
    </S.NavContainer>
  );
};
