// import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import menu from '../../assets/Icons/navbar/menu.svg';
import { DatePickerComponent } from '../datepicker';
import * as S from './styles';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/task');
  };

  //----------------------------------------------------------------

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

  //----------------------------------------------------------------

  const [activatedMenu, setActivatedMenu] = useState(false);

  const handleClickMenuButton = () => setActivatedMenu(!activatedMenu);

  const handleClickBodyContainer = () => {
    // if (activatedCalendar === false) {
    //   setActivatedCalendar(!activatedCalendar);
    // }
    if (activatedMenu === true) {
      setActivatedMenu(!activatedMenu);
    }
  };

  //----------------------------------------------------------------

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
      <DatePickerComponent />
      <S.BodyContainer onClick={handleClickBodyContainer} />
    </>
  );
};
