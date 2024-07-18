import styled from 'styled-components';

export const TitleContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    height: 100%;
    border: none;
    border-radius: 8px;
    padding: 5px;
    background-color: #eeeeee;
    font-size: 18px;
    margin: 1rem 1rem 0 1rem;
  }
`;

export const DateAndTypeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem;
  margin: 0 1rem 0 1rem;
  margin-top: 1rem;
  gap: 1rem;

  span {
    font-size: 16px;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.2rem;
  }

  input {
    width: 85%;
    border: none;
    border-radius: 8px;
    padding: 5px;
    background-color: #eeeeee;
    font-size: 18px;
    text-align: center;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    font-size: 16px;
    gap: 0.5rem;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      list-style-type: none;
      border-radius: 50%;

      input {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
`;

export const DescritionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  textarea {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: none;
    border-radius: 8px;
    min-height: 15rem;
    max-height: 22rem;
    max-width: 100%;
    background-color: #eeeeee;
    font-size: 18px;
    padding: 8px;
    margin: 1rem 0;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

interface CreateTaskButtonProps {
  isActive: boolean;
}
export const CreateTaskButton = styled.button<CreateTaskButtonProps>`
  background-color: ${(props) => (props.isActive ? '#1294f2' : 'gray')};
  color: #ffffff;
  &:hover {
    cursor: ${(props) => (props.isActive ? 'pointer' : 'default')};
    filter: brightness(${(props) => (props.isActive ? '1.09' : '1')});
  }
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 18px;
  margin: 0 1rem;
`;
