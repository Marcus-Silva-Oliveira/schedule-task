// import { useState } from "react";

import * as S from './styles';
import DragIndicator from '../../assets/Icons/taskcomponent/drag_indicator.svg';
import Check from '../../assets/Icons/taskcomponent/check.svg';
import Delete from '../../assets/Icons/taskcomponent/delete.svg';
import { TaskType, Task } from './types';

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
