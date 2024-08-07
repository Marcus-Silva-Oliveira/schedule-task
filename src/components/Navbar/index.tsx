// import { Link } from 'react-router-dom';

import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonComponent } from '../button';
import menu from '../../assets/Icons/navbar/menu.svg';
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

  const handleClickMenuButton = () => setActivatedMenu(!activatedMenu);

  const handleClickBodyContainer = () =>
    setActivatedMenu(activatedMenu ? false : false);

  const handleClickCreateTask = (): void => {
    navigate('/task');
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
        </div>

        <S.ActualDateContainer>
          <span>{nameWeekDay}</span>
          <span>{date.getDate()}</span>
        </S.ActualDateContainer>
      </S.NavContainer>
      <S.MenuContainer activeMenu={activatedMenu}>
        <ButtonComponent
          content="Adicionar tarefa"
          onClick={() => {
            handleClickCreateTask();
            setActivatedMenu(!activatedMenu);
          }}
          background="#1294F2"
          color="#ffffff"
          minWidth="10.06rem"
        />

        <ButtonComponent
          background="#C7C7C7"
          color="#000000"
          content="Tarefas concluídas"
          onClick={() => {}}
          minWidth="10.06rem"
        />

        <ButtonComponent
          background="#C7C7C7"
          color="#000000"
          content="Tarefas exluídas"
          onClick={() => {}}
          minWidth="10.06rem"
        />
      </S.MenuContainer>
      <S.BodyContainer onClick={handleClickBodyContainer} />
    </>
  );
};
