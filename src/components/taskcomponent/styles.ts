import styled from 'styled-components';

export const TasksContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 90px;
  align-items: center;
`;

export const Taskbucket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #a6a6a6;
  border-radius: 8px;
  padding: 15px 10px;
  margin: 0 1.2rem;
  gap: 1rem;
`;

export const TaskTitle = styled.button`
  display: flex;
  max-width: 80%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 16px;

  img {
    width: 35px;
  }
`;

export const TaskButtonsBucket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  /* margin-right: 1rem; */
`;

export const TaskDone = styled.button`
  display: flex;
  border: none;
  background-color: #08aa49;
  border-radius: 8px;
  padding: 7px;
`;

export const TaskDelete = styled.button`
  display: flex;
  border: none;
  background-color: #ce3535;
  border-radius: 8px;
  padding: 7px;
`;
