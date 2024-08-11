import Calendar from 'react-calendar';
import styled from 'styled-components';

interface activeCalendarProps {
  activeCalendar: boolean;
}
export const CalendarContainer = styled.div<activeCalendarProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  position: fixed;
  top: 6%;
  z-index: 0;
  width: 100%;
  transform: translateY(${(props) => (props.activeCalendar ? '-83%' : '4%')});
  transition: transform 0.2s ease;
  padding: 1rem 1rem 0.5rem 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
      margin-top: 1.5rem;
      width: 110px;
    }
  }
`;

export const ShowCalendar = styled(Calendar)`
  background-color: #d9d9d9;
  border: none;
  border-radius: 8px;
  width: 30rem;
  height: 20rem;
`;
