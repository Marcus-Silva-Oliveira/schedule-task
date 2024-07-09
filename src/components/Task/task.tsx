// import { useState } from "react";

import * as S from './styles';
import DragIndicator from '../../assets/Icons/TaskComponent/drag_indicator.svg';
import Check from '../../assets/Icons/TaskComponent/check.svg';
import Delete from '../../assets/Icons/TaskComponent/delete.svg';
// import { ReactElement } from 'react';

enum TaskType {
  Acquistion,
  Collect,
  Delivery,
}

export interface Task {
  id: number;
  Title: string;
  Assign?: string;
  startDate?: Date;
  endDate?: Date;
  type?: TaskType;
  description?: string;
}

export const TaskComponent: React.FC<Task> = (props) => {
  const handleClickDone = (): void => {
    // TODO: call a function that changes the endDate, passing props.id;
  };

  const handleClickDelete = (): void => {
    // TODO: call a function that changes the endDate, passing props.id;
  };

  return (
    <S.TasksContainer>
      <S.Taskbucket>
        <img src={DragIndicator} alt="Ícone de ordenação" />
        <S.TaskTitle>
          {/* Adicionar aqui a propriedade que virá da página de criação de tasks */}
          {props.Title}
        </S.TaskTitle>

        <S.TaskButtonsBucket>
          <S.TaskDone onClick={handleClickDone}>
            <img src={Check} alt="Botão de conclusão de task" />
          </S.TaskDone>

          <S.TaskDelete onClick={handleClickDelete}>
            <img src={Delete} alt="Botão de exclusão de task" />
          </S.TaskDelete>
        </S.TaskButtonsBucket>
      </S.Taskbucket>
    </S.TasksContainer>
  );
};
