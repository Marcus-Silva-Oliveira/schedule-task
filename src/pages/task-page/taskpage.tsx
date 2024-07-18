import React, { useEffect, useState } from 'react';
// import { format } from 'date-fns';

import * as S from './styles';

//-----------------------------------------------

//Types

enum TaskType {
  Analysis = 'Análise',
  Problem = 'Problema',
  Support = 'Suporte',
  Test = 'Teste',
  Empty = 'none',
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

export const TaskPage: React.FC = () => {
  // const currentDate: string | Date | number = new Date();
  // const date = format(currentDate, 'dd-MM-yyyy');

  //useState
  const [inputTitle, setInputTitle] = useState('');
  const [inputAssign, setInputAssign] = useState('');
  const [inputStartDate, setInputStartDate] = useState('');
  const [inputEndDate, setInputEndDate] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [analysisChecked, setAnalysisChecked] = useState(false);
  const [problemChecked, setProblemChecked] = useState(false);
  const [supportChecked, setSupportChecked] = useState(false);
  const [testChecked, setTestChecked] = useState(false);
  const [createTaskActive, setCreateTaskActive] = useState(false);

  //useEffect
  useEffect(() => {
    const buttonCreateTaskCondition =
      inputTitle.trim() !== '' &&
      inputAssign.trim() !== '' &&
      inputStartDate.trim() !== '' &&
      inputEndDate.trim() !== '' &&
      inputDescription.trim() !== '';
    inputTitle.trim() === '' ||
      inputAssign.trim() === '' ||
      inputStartDate.trim() === '' ||
      inputEndDate.trim() === '' ||
      inputDescription.trim() === '';

    setCreateTaskActive(buttonCreateTaskCondition);
  }, [inputTitle, inputAssign, inputStartDate, inputEndDate, inputDescription]);

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

  //Variables
  const isActive: boolean = createTaskActive;

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

  //Active submit button
  const activeCreateTaskButton = () => {
    if (inputTitle === '') {
      alert('É preciso preencher o campo Título');
    } else if (inputAssign === '') {
      alert('É preciso preencher o campo Responsável');
    } else if (inputStartDate === '') {
      alert('É preciso preencher o campo Data de criação');
    } else if (inputEndDate === '') {
      alert('É preciso preencher o campo Data limite');
    } else if (
      analysisChecked === false &&
      problemChecked === false &&
      supportChecked === false &&
      testChecked === false
    ) {
      alert('É preciso selecionar um dos tipos');
    } else if (inputDescription === '') {
      alert('É preciso preencher o campo Descrição');
    } else {
      handleClickCreateButton();
      console.log(dataForm);
    }
  };

  //Check Definition
  const getTaskType = (
    analysisChecked: boolean,
    problemChecked: boolean,
    supportChecked: boolean,
    testChecked: boolean,
  ): TaskType => {
    if (analysisChecked) {
      return TaskType.Analysis;
    } else if (problemChecked) {
      return TaskType.Problem;
    } else if (supportChecked) {
      return TaskType.Support;
    } else if (testChecked) {
      return TaskType.Test;
    } else {
      return TaskType.Empty;
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
    setProblemChecked(false);
    setSupportChecked(false);
    setTestChecked(false);
  };

  //-----------------------------------------------
  //Variables to send:

  const dataForm: Task = {
    Title: inputTitle,
    Assign: inputAssign,
    StartDate: inputStartDate,
    EndDate: inputEndDate,
    TaskType: getTaskType(
      analysisChecked,
      problemChecked,
      supportChecked,
      testChecked,
    ),
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
          type="submit"
          isActive={isActive}
          onClick={() => {
            //Change to send the data
            activeCreateTaskButton();
          }}
        >
          {isActive ? 'Criar Tarefa' : 'Preencha os dados'}
        </S.CreateTaskButton>
      </S.ButtonsContainer>
    </>
  );
};
