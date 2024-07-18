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
  const [isChecked, setIsChecked] = useState<TaskType>(TaskType.Empty);

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
  const handleInputTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputTitle(event.target.value);
  //Input Assign
  const handleInputAssignChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setInputAssign(event.target.value);
  //Input StartDate
  const handleInputStartDate = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputStartDate(event.target.value);
  //Input EndDate
  const handleInputEndDate = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputEndDate(event.target.value);
  //-----------------------------------------------

  //Global variables
  const isActive: boolean = createTaskActive;

  //-----------------------------------------------

  //Input Check
  const handleCkeckEnable = () => setAnalysisChecked(!analysisChecked);
  const handleProblemCkeckEnable = () => setProblemChecked(!problemChecked);
  const handleSupportCkeckEnable = () => setSupportChecked(!supportChecked);
  const handleTestCkeckEnable = () => setTestChecked(!testChecked);
  //-----------------------------------------------

  //Input Description
  const handleInputDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => setInputDescription(event.target.value);
  //-----------------------------------------------
  //Functions:

  //Active submit button
  const activeCreateTaskButton = () => {
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

    if (createTaskActive === false) {
      alert('Preencha todos os campos');
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

  //-----------------------------------------------

  return (
    <>
      <S.TitleContainer>
        <h1>Tarefa</h1>
      </S.TitleContainer>
      <S.InputContainer>
        <input
          placeholder="Título:"
          type="text"
          value={inputTitle}
          onChange={handleInputTitleChange}
        />
        <input
          placeholder="Responsável:"
          type="text"
          value={inputAssign}
          onChange={handleInputAssignChange}
        />
      </S.InputContainer>

      <S.DateAndTypeContainer>
        <div>
          <span>Data de criação:</span>
          <input
            type="date"
            value={inputStartDate}
            onChange={handleInputStartDate}
          />
          <span>Data limite:</span>
          <input
            type="date"
            value={inputEndDate}
            onChange={handleInputEndDate}
          />
        </div>
        <div>
          <ul>
            <li style={{ color: '#8ED05A' }}>
              <input
                type="checkbox"
                value={TaskType.Analysis}
                checked={analysisChecked}
                onChange={handleCkeckEnable}
              />
              Análise
            </li>

            <li style={{ color: '#EB9734' }}>
              <input
                type="checkbox"
                value={TaskType.Problem}
                checked={problemChecked}
                onChange={handleProblemCkeckEnable}
              />
              Problema
            </li>

            <li style={{ color: '#1641D9' }}>
              <input
                type="checkbox"
                value={TaskType.Support}
                checked={supportChecked}
                onChange={handleSupportCkeckEnable}
              />
              Suporte
            </li>
            <li style={{ color: '#b80202' }}>
              <input
                type="checkbox"
                value={TaskType.Test}
                checked={testChecked}
                onChange={handleTestCkeckEnable}
              />
              Teste
            </li>
          </ul>
        </div>
      </S.DateAndTypeContainer>

      <S.DescritionContainer>
        <h2>Descrição:</h2>

        <textarea
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
