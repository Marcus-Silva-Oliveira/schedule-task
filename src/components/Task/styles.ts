import styled from "styled-components";


export const AllTasksContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 90px;
  align-items: center;
`;

export const TaskContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #A6A6A6;
  border: none;
  border-radius: 8px;
  padding: 15px 10px;
  margin: 0 2rem;
  flex-wrap: nowrap;
  font-size: 16px;
`;

export const TaskTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 0 0.5rem;
  gap: 1rem;
`;

export const TaskButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;
`;

export const TaskCheck = styled.button`
  display: flex;
  border: none;
  background-color: #08AA49;
  border-radius: 8px;
  padding: 3px;
`;

export const TaskDelete = styled.button`
  display: flex;
  border: none;
  background-color: #CE3535;
  border-radius: 8px;
  padding: 3px;
`;