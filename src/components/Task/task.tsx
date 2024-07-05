// import { useState } from "react";

import * as S from './styles';
import DragIndicator from '../../assets/Icons/TaskComponent/drag_indicator.svg';
import Check from '../../assets/Icons/TaskComponent/check.svg';
import Delete from '../../assets/Icons/TaskComponent/delete.svg';
// import { ReactElement } from 'react';

export const TaskComponent: React.FC = () => {
  return (
    <S.TasksContainer>
      <S.Taskbucket>
        <img src={DragIndicator} alt="Ícone de ordenação" />
        <S.TaskTitle>
          {/* Adicionar aqui a propriedade que virá da página de criação de tasks */}
          Titulo da task
        </S.TaskTitle>

        <S.TaskButtonsBucket>
          <S.TaskDone>
            <img src={Check} alt="Botão de conclusão de task" />
          </S.TaskDone>

          <S.TaskDelete>
            <img src={Delete} alt="Botão de exclusão de task" />
          </S.TaskDelete>
        </S.TaskButtonsBucket>
      </S.Taskbucket>
    </S.TasksContainer>
  );
};
