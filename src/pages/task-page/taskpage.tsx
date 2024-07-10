import React, { useState } from 'react';
// import { format } from 'date-fns';

import * as S from './styles';

export const TaskPage: React.FC = () => {
  // const currentDate: string | Date | number = new Date();
  // const date = format(currentDate, 'dd-MM-yyyy');

  const [inputTitle, setInputTitle] = useState('');
  const [inputAssign, setInputAssign] = useState('');
  const [inputStartDate, setInputStartDate] = useState('');
  const [inputEndDate, setInputEndDate] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [analysisChecked, setAnalysisChecked] = useState(false);
  const [problemChecked, setProblemChecked] = useState(false);
  const [supportChecked, setSupportChecked] = useState(false);
  const [testChecked, setTestChecked] = useState(false);

  //-----------------------------------------------

  //Input Title
  const handleInputTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputTitle(event.target.value);
  };

  //Input Assign
  const handleInputAssignChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputAssign(event.target.value);
  };

  //Input StartDate
  const handleInputStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputStartDate(event.target.value);
  };

  //Input EndDate
  const handleInputEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEndDate(event.target.value);
  };

  //-----------------------------------------------

  //Input Check
  const handleAnalysisCkeckEnable = () => {
    setAnalysisChecked(!analysisChecked);
  };
  const handleProblemCkeckEnable = () => {
    setProblemChecked(!problemChecked);
  };
  const handleSupportCkeckEnable = () => {
    setSupportChecked(!supportChecked);
  };
  const handleTestCkeckEnable = () => {
    setTestChecked(!testChecked);
  };

  //-----------------------------------------------

  //Input Description
  const handleInputDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setInputDescription(event.target.value);
  };

  //-----------------------------------------------
  //Functions:

  const getTaskType: TaskType = () => {
    if (analysisChecked) {
      return analysisChecked;
    } else if (problemChecked) {
      return problemChecked;
    } else if (supportChecked) {
      return supportChecked;
    } else {
      return testChecked;
    }
  };

  //Clear Fields
  const handleClickCreateButton = () => {
    setInputTitle('');
    setInputAssign('');
    setInputStartDate('');
    setInputEndDate('');
    setInputDescription('');
    setAnalysisChecked(false);
  };

  //-----------------------------------------------

  // const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     // Aqui você pode fazer o que quiser com o valor digitado
  //     console.log(inputTitle);
  //     // Por exemplo, limpar o input:
  //     setInputTitle('');
  //   }
  // };

  //-----------------------------------------------
  //Types

  enum TaskType {
    analysis,
    problem,
    suport,
    test,
  }

  interface Task {
    Title: string;
    Assign: string;
    StartDate?: Date | string | number;
    EndDate?: Date | string | number;
    TaskType?: TaskType;
    Description?: string;
  }

  //-----------------------------------------------
  //Variables to send:

  const dataForm: Task = {
    Title: inputTitle,
    Assign: inputAssign,
    StartDate: inputStartDate,
    EndDate: inputEndDate,
    TaskType: getTaskType(),
    Description: inputDescription,
  };

  //-----------------------------------------------

  return (
    <>
      <S.TitleContainer>
        <S.PageTitle>Tarefa</S.PageTitle>
      </S.TitleContainer>
      <S.InputContainer>
        <S.Input
          placeholder="Título:"
          type="text"
          value={inputTitle}
          onChange={handleInputTitleChange}
          // onKeyPress={handleKeyPress}
        />
        <S.Input
          placeholder="Responsável:"
          type="text"
          value={inputAssign}
          onChange={handleInputAssignChange}
        />
      </S.InputContainer>

      <S.DateAndTypeContainer>
        <S.DateContainer>
          <S.Span>Data de criação:</S.Span>
          <S.InputDate
            type="date"
            value={inputStartDate}
            onChange={handleInputStartDate}
          />
          <S.Span>Data limite:</S.Span>
          <S.InputDate
            type="date"
            value={inputEndDate}
            onChange={handleInputEndDate}
          />
        </S.DateContainer>
        <S.TypeContainer>
          <S.TypeList>
            <S.TypeListIems style={{ color: '#8ED05A' }}>
              <S.Checkbox
                checked={analysisChecked}
                onChange={handleAnalysisCkeckEnable}
              />
              Análise
            </S.TypeListIems>

            <S.TypeListIems style={{ color: '#EB9734' }}>
              <S.Checkbox
                checked={problemChecked}
                onChange={handleProblemCkeckEnable}
              />
              Problema
            </S.TypeListIems>

            <S.TypeListIems style={{ color: '#1641D9' }}>
              <S.Checkbox
                checked={supportChecked}
                onChange={handleSupportCkeckEnable}
              />
              Suporte
            </S.TypeListIems>
            <S.TypeListIems style={{ color: '#b80202' }}>
              <S.Checkbox
                checked={testChecked}
                onChange={handleTestCkeckEnable}
              />
              Teste
            </S.TypeListIems>
          </S.TypeList>
        </S.TypeContainer>
      </S.DateAndTypeContainer>

      <S.DescritionContainer>
        <S.DescriptionTitle>Descrição:</S.DescriptionTitle>

        <S.DescritionInput
          value={inputDescription}
          onChange={handleInputDescriptionChange}
        />
      </S.DescritionContainer>

      <S.ButtonsContainer>
        <S.CreateTaskButton
          onClick={() => {
            //Change to send the data
            console.log(dataForm);
            handleClickCreateButton();
          }}
        >
          Criar tarefa
        </S.CreateTaskButton>
      </S.ButtonsContainer>
    </>
  );
};