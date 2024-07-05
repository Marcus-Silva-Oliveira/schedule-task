// import { Link } from 'react-router-dom';

import React from 'react';
import * as S from './styles';

export const NavBar: React.FC = () => {
  const date: Date = new Date();
  const day: number = date.getDay();
  const weekDay = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  const nameWeekDay = weekDay[day];

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
        <S.ActualDayString>{nameWeekDay}</S.ActualDayString>
        <S.ActualDayNumber>{date.getDay()}</S.ActualDayNumber>
      </S.ActualDateContainer>
    </S.NavContainer>
  );
};
