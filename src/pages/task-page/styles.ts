import styled from 'styled-components';

export const TitleContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Span = styled.span`
  font-size: 16px;
`;

export const Input = styled.input`
  height: 100%;
  border: none;
  border-radius: 8px;
  padding: 5px;
  background-color: #eeeeee;
  font-size: 18px;
  margin: 1rem 1rem 0 1rem;
`;

export const DateAndTypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 1rem;
  margin-top: 1rem;
  gap: 2rem;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.2rem;
`;

export const InputDate = styled.input`
  width: 85%;
  border: none;
  border-radius: 8px;
  padding: 5px;
  background-color: #eeeeee;
  font-size: 18px;
  text-align: center;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const TypeList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 16px;
  gap: 0.5rem;
`;

export const TypeListIems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style-type: none;
  border-radius: 50%;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const DescritionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`;

export const DescriptionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const DescritionInput = styled.textarea`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: none;
  border-radius: 8px;
  min-height: 15rem;
  max-height: 22rem;
  width: 100%;
  background-color: #eeeeee;
  font-size: 18px;
  padding: 8px;
  margin: 1rem 0;
`;

export const ButtonsContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const CreateTaskButton = styled.button`
  background-color: #1294f2;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 10px;
  /* width: 135px;
  height: 41px; */
  font-size: 18px;
  margin: 0 1rem;
`;
