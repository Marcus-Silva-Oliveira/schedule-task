// import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import menu from '../../assets/Icons/navbar/menu.svg';
import arrowDown from '../../assets/Icons/navbar/keyboard_arrow_down.png';
import arrowUp from '../../assets/Icons/navbar/keyboard_arrow_up.png';

import * as S from './styles';

export const NavBar: React.FC = () => {
  const date: Date = new Date();
  const weekDay = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  const nameWeekDay = weekDay[date.getDay()];

  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());
  const [activatedCalendar, setActivatedCalendar] = useState(true);
  const [activatedMenu, setActivatedMenu] = useState(false);

  const activeCalendar: boolean = activatedCalendar;
  const activeMenu: boolean = activatedMenu;

  const handleClickArrowToActiveViewCalendar = () => {
    setActivatedCalendar(!activatedCalendar);
  };

  const handleClickMenuButton = () => {
    setActivatedMenu(!activatedMenu);
  };

  return (
    <>
      <S.NavContainer>
        <div>
          <button onClick={handleClickMenuButton}>
            <img src={menu} alt="icone do menu" />
          </button>

          <button>Adicionar tarefa</button>
        </div>

        <S.ActualDateContainer>
          <span>{nameWeekDay}</span>
          <span>{date.getDate()}</span>
        </S.ActualDateContainer>
      </S.NavContainer>
      <S.MenuContainer activeMenu={activeMenu}>
        <button>Taredas concluídas</button>
        <button>Tarefas excluídas</button>
      </S.MenuContainer>
      <S.CalendarContainer activeCalendar={activeCalendar}>
        <Calendar onChange={onChange} value={value} />
        <button onClick={handleClickArrowToActiveViewCalendar}>
          {activeCalendar ? <img src={arrowDown} /> : <img src={arrowUp} />}
        </button>
      </S.CalendarContainer>
    </>
  );
};
