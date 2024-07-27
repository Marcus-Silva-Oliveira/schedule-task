// import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import menu from '../../assets/Icons/navbar/menu.svg';
import pushButton from '../../assets/Icons/navbar/Push-button.png';

import * as S from './styles';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/task');
  };

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

  const [activatedCalendar, setActivatedCalendar] = useState(true);
  const [activatedMenu, setActivatedMenu] = useState(false);

  const handleClickToShowCalendar = () =>
    setActivatedCalendar(!activatedCalendar);

  const handleClickMenuButton = () => setActivatedMenu(!activatedMenu);

  const handleClickBodyContainer = () => {
    if (activatedCalendar === false) {
      setActivatedCalendar(!activatedCalendar);
    }
    if (activatedMenu === true) {
      setActivatedMenu(!activatedMenu);
    }
  };

  return (
    <>
      <S.NavContainer>
        <div>
          <button onClick={handleClickMenuButton}>
            <img src={menu} alt="icone do menu" />
          </button>

          <button onClick={handleClick}>Adicionar tarefa</button>
        </div>

        <S.ActualDateContainer>
          <span>{nameWeekDay}</span>
          <span>{date.getDate()}</span>
        </S.ActualDateContainer>
      </S.NavContainer>
      <S.MenuContainer activeMenu={activatedMenu}>
        <button>Tarefas concluídas</button>
        <button>Tarefas excluídas</button>
      </S.MenuContainer>
      <S.CalendarContainer activeCalendar={activatedCalendar}>
        <button onClick={handleClickToShowCalendar}>
          <img src={pushButton} />
        </button>
      </S.CalendarContainer>
      <S.BodyContainer onClick={handleClickBodyContainer} />
    </>
  );
};
