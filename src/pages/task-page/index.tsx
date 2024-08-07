import React, { useEffect, useState } from 'react';

import * as S from './styles';
import { ButtonComponent } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { ModalComponent } from '../../components/modal';
import { Task, TaskType } from '../../api/task/type';
import TaskApi from '../../api/task/api';

//-----------------------------------------------

//-----------------------------------------------

export const TaskPage: React.FC = () => {
  const navigate = useNavigate();

  const { saveTask } = TaskApi();

  //useState
  const [inputTitle, setInputTitle] = useState('');
  const [inputAssign, setInputAssign] = useState('');
  const [inputStartDate, setInputStartDate] = useState('');
  const [inputEndDate, setInputEndDate] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputTaskType, setInputTaskType] = useState<TaskType>(TaskType.none);
  const [createTaskActive, setCreateTaskActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [emptyFields, setEmptyFields] = useState('');

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

  const handleClickCancelTask = () => {
    navigate('/scheduleScreen');
  };

  const handleCloseModal = () => setShowModal(false);

  //-----------------------------------------------
  //Active submit button
  const handleSubmitFormOnClickCreateTaskButton = () => {
    const dataForm: Task = {
      title: inputTitle,
      assign: inputAssign,
      startDate: inputStartDate,
      endDate: inputEndDate,
      taskType: inputTaskType,
      description: inputDescription,
    };

    let emptyFields: string = '';

    if (inputTitle === '') {
      emptyFields += '  Título  ';
    }
    if (inputAssign === '') {
      emptyFields += '  Responsável  ';
    }
    if (inputStartDate === '') {
      emptyFields += '  Data de criação  ';
    }
    if (inputEndDate === '') {
      emptyFields += '  Data limite  ';
    }
    if (inputTaskType === TaskType.none) {
      emptyFields += '  Selecione um tipo  ';
    }
    if (inputDescription === '') {
      emptyFields += '  Descrição  ';
    }
    if (emptyFields !== '') {
      setEmptyFields(emptyFields);
      setShowModal(true);
    } else {
      saveTask({
        task: dataForm,
        onSuccess: () => {
          alert('Salvou a nova Task');
        },
        onError: () => {
          alert('Ocorreu um erro');
        },
      });
      handleClickCreateButtonCleanForm();
    }
  };

  //-----------------------------------------------
  return (
    <>
      <ModalComponent
        title="Ops! Parece que você não preencheu tudo."
        onClose={handleCloseModal}
        showModal={showModal ? 'flex' : 'none'}
        missingFields={emptyFields}
        content="Entendi"
        textColor="#CE3535"
      />
      <S.BodyContainer>
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
                  checked={inputTaskType === TaskType.analysis}
                  onChange={() => setInputTaskType(TaskType.analysis)}
                />
                Análise
              </li>

              <li style={{ color: '#EB9734' }}>
                <input
                  type="radio"
                  name="TaskType"
                  value={inputTaskType}
                  checked={inputTaskType === TaskType.problem}
                  onChange={() => setInputTaskType(TaskType.problem)}
                />
                Problema
              </li>

              <li style={{ color: '#1641D9' }}>
                <input
                  type="radio"
                  name="TaskType"
                  value={inputTaskType}
                  checked={inputTaskType === TaskType.support}
                  onChange={() => setInputTaskType(TaskType.support)}
                />
                Suporte
              </li>
              <li style={{ color: '#b80202' }}>
                <input
                  type="radio"
                  name="TaskType"
                  value={inputTaskType}
                  checked={inputTaskType === TaskType.test}
                  onChange={() => setInputTaskType(TaskType.test)}
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
            onClick={handleSubmitFormOnClickCreateTaskButton}
          >
            {createTaskActive ? 'Criar Tarefa' : 'Preencha os dados'}
          </S.CreateTaskButton>
          <ButtonComponent
            content="Cancelar"
            onClick={handleClickCancelTask}
            background="#CE3535"
            color="#ffffff"
          />
        </S.ButtonsContainer>
      </S.BodyContainer>
    </>
  );
};
