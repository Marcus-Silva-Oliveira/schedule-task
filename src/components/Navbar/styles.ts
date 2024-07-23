import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #ffffff;
  width: 100%;
  padding: 1rem 1rem;
  gap: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  button:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9e9e9e;
    padding: 0.7rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      filter: brightness(1.1);
    }

    img {
      width: auto;
    }
  }

  button:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1294f2;
    padding: 7px;
    border: none;
    border-radius: 8px;
    height: 2.87rem;
    font-size: 16px;
    line-height: 1;
    width: fit-content;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      filter: brightness(1.1);
    }
  }
`;
interface activeMenuProps {
  activeMenu: boolean;
}
export const MenuContainer = styled.div<activeMenuProps>`
  display: ${(props) => (props.activeMenu ? 'flex' : 'none')};
  flex-direction: column;
  border-radius: 8px;
  background-color: #9e9e9e;
  gap: 0.5rem;
  position: fixed;
  z-index: 2;
  width: 200px;
  height: 200px;
  margin: 4.3rem 0 0 1rem;
  padding: 0.5rem;

  button {
    background-color: #c7c7c7;
    border: none;
    border-radius: 8px;
    height: 3rem;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const ActualDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: bold;

  span:first-child {
    font-size: 16px;
    text-align: right;
  }

  span:last-child {
    font-size: 48px;
    line-height: 1;
  }
`;

interface activeCalendarProps {
  activeCalendar: boolean;
}
export const CalendarContainer = styled.div<activeCalendarProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10%;
  z-index: -2;
  width: 100%;
  transform: translateY(${(props) => (props.activeCalendar ? '-86%' : '0')});
  transition: transform 0.2s ease;
  padding: 1rem 1rem 0.5rem 1rem;

  button {
    background-color: transparent;
    border: none;
    opacity: 1;
    cursor: pointer;

    img {
      width: 40px;
    }
  }
`;
