// import { Link } from 'react-router-dom';

import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../../assets/Icons/navbar/menu.svg';
import { ButtonComponent } from '../button';
import * as S from './styles';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

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
  const [activatedAddTaskButton, setActivatedAddTaskButton] = useState(false);

  const handleClickMenuButton = () => setActivatedMenu(!activatedMenu);

  const handleClickBodyContainer = () =>
    setActivatedMenu(activatedMenu ? false : false);

  const handleClick = (): void => {
    if (activatedAddTaskButton === false) {
      navigate('/task');
      setActivatedAddTaskButton(!activatedAddTaskButton);
    } else {
      navigate('/scheduleScreen');
      setActivatedAddTaskButton(!activatedAddTaskButton);
    }
  };

  //----------------------------------------------------------------

  return (
    <>
      <S.NavContainer>
        <div>
          <ButtonComponent
            content={<img src={menu} />}
            onClick={handleClickMenuButton}
            background="#9E9E9E"
            color="#ffffff"
          />

          <ButtonComponent
            content={activatedAddTaskButton ? 'Cancelar' : 'Adicionar tarefa'}
            onClick={handleClick}
            background={activatedAddTaskButton ? '#CE3535' : '#1294F2'}
            color="#000000"
          />
        </div>

        <S.ActualDateContainer>
          <span>{nameWeekDay}</span>
          <span>{date.getDate()}</span>
        </S.ActualDateContainer>
      </S.NavContainer>
      <S.MenuContainer activeMenu={activatedMenu}>
        <ButtonComponent
          background="#C7C7C7"
          color="#000000"
          content="Tarefas concluídas"
          onClick={() => {}}
        />
        <ButtonComponent
          background="#C7C7C7"
          color="#000000"
          content="Tarefas exluídas"
          onClick={() => {}}
        />
      </S.MenuContainer>
      <S.BodyContainer onClick={handleClickBodyContainer} />
    </>
  );
};
