import { useState } from "react";

import * as S from "./styles";
import DragIndicator from "../../assets/Icons/TaskComponent/drag_indicator.svg";
import Check from "../../assets/Icons/TaskComponent/check.svg";
import Delete from "../../assets/Icons/TaskComponent/delete.svg";

export const Task: React.FC = () => {
  const [done, setDone] = useState(false);


  return (
    <S.AllTasksContainer>
      <S.TaskContainer>
        <S.TaskTitleContainer>
        <img src={DragIndicator} alt="Imagem referente ao ícone de ordenação" />
        
        Título da task
      </S.TaskTitleContainer>
        
        <S.TaskButtonsContainer>
          
          <S.TaskCheck>
            <img src={Check} alt="Botão de conclusão de task" />
          </S.TaskCheck>

          <S.TaskDelete>
            <img src={Delete} alt="Botão de exclusão de task" />
          </S.TaskDelete>

        </S.TaskButtonsContainer>

      </S.TaskContainer>

    </S.AllTasksContainer>
  );
}