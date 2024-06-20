import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
`;

export const NavButtonsContainer = styled.div`
  display: flex;
`;

export const MenuButton = styled.button`
  background-color: #9E9E9E;
  padding: 1rem;
  width: 2.56rem;
  height: 2.56rem;
  border: none;
  border-radius: 8px;
`;

export const ButtonAddTask = styled.button`
  background-color: #1294F2;
  padding: 7px 6px;
  margin: 0 0 0 0.5rem;
  border: none;
  border-radius: 8px;
  width: 5.87rem;
  height: 2.56rem;
`;

export const ActualDateContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ActualDayString = styled.span`
  font-size: 20px;
`;

export const ActualDayNumber = styled.span`
  font-size: 40px;
`;