import React, { useEffect, useState } from 'react';
// import { format } from 'date-fns';

import * as S from './styles';

//-----------------------------------------------

//Types

enum TaskType {
  Analysis = 'Analysis',
  Problem = 'Problem',
  Support = 'Support',
  Test = 'Test',
  none = 'none',
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
  const [inputTaskType, setInputTaskType] = useState<TaskType>(TaskType.none);
  const [createTaskActive, setCreateTaskActive] = useState(false);

  //useEffect
  useEffect(() => {
    const buttonCreateTaskCondition =
      inputTitle.trim() !== '' &&
      inputAssign.trim() !== '' &&
      inputStartDate.trim() !== '' &&
      inputEndDate.trim() !== '' &&
      inputDescription.trim() !== '' &&
      inputTaskType !== TaskType.none;

    setCreateTaskActive(buttonCreateTaskCondition);
  }, [
    inputTitle,
    inputAssign,
    inputStartDate,
    inputEndDate,
    inputTaskType,
    inputDescription,
  ]);

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

  //Input Description
  const handleInputDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => setInputDescription(event.target.value);
  //-----------------------------------------------
  //Functions:

  //Clear fields
  const handleClickCreateButtonCleanForm = () => {
    setInputTitle('');
    setInputAssign('');
    setInputStartDate('');
    setInputEndDate('');
    setInputDescription('');
    setInputTaskType(TaskType.none);
  };

  //-----------------------------------------------
  //Active submit button
  const handleSubmitFormOnClickCreateTaskButton = () => {
    const dataForm: Task = {
      Title: inputTitle,
      Assign: inputAssign,
      StartDate: inputStartDate,
      EndDate: inputEndDate,
      TaskType: inputTaskType,
      Description: inputDescription,
    };

    let emptyFields: string = '';

    if (inputTitle === '') {
      emptyFields += ' | Título | ';
    }
    if (inputAssign === '') {
      emptyFields += ' | Responsável | ';
    }
    if (inputStartDate === '') {
      emptyFields += ' | Data de criação | ';
    }
    if (inputEndDate === '') {
      emptyFields += ' | Data limite | ';
    }
    if (inputTaskType === TaskType.none) {
      emptyFields += ' | Selecione um tipo | ';
    }
    if (inputDescription === '') {
      emptyFields += ' | Descrição | ';
    }
    if (emptyFields !== '') {
      alert(emptyFields);
    } else {
      handleClickCreateButtonCleanForm();
    }
  };

  //-----------------------------------------------
  1;
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
                type="radio"
                name="TaskType"
                value={inputTaskType}
                checked={inputTaskType === TaskType.Analysis}
                onChange={() => setInputTaskType(TaskType.Analysis)}
              />
              Análise
            </li>

            <li style={{ color: '#EB9734' }}>
              <input
                type="radio"
                name="TaskType"
                value={inputTaskType}
                checked={inputTaskType === TaskType.Problem}
                onChange={() => setInputTaskType(TaskType.Problem)}
              />
              Problema
            </li>

            <li style={{ color: '#1641D9' }}>
              <input
                type="radio"
                name="TaskType"
                value={inputTaskType}
                checked={inputTaskType === TaskType.Support}
                onChange={() => setInputTaskType(TaskType.Support)}
              />
              Suporte
            </li>
            <li style={{ color: '#b80202' }}>
              <input
                type="radio"
                name="TaskType"
                value={inputTaskType}
                checked={inputTaskType === TaskType.Test}
                onChange={() => setInputTaskType(TaskType.Test)}
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
          isActive={createTaskActive}
          onClick={() => {
            handleSubmitFormOnClickCreateTaskButton();
          }}
        >
          {createTaskActive ? 'Criar Tarefa' : 'Preencha os dados'}
        </S.CreateTaskButton>
      </S.ButtonsContainer>
    </>
  );
};
