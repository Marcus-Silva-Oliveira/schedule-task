import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1rem;
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const MenuButton = styled.button`
  background-color: #9e9e9e;
  padding: 0.5rem;
  /* width: 2.56rem;
  height: 2.56rem; */
  border: none;
  border-radius: 8px;

  svg {
  }
`;

export const ButtonAddTask = styled.button`
  background-color: #1294f2;
  padding: 7px 6px;
  border: none;
  border-radius: 8px;
  width: 5.87rem;
  height: 2.87rem;
  font-size: 16px;
  width: fit-content;
  font-weight: bold;
`;

export const ActualDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  font-weight: bold;
`;

export const ActualDayString = styled.span`
  font-size: 15.5px;
`;

export const ActualDayNumber = styled.span`
  font-size: 48px;
`;
