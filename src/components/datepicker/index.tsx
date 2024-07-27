import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DatePickerContainer } from './styles';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function DatePickerComponent() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <DatePickerContainer>
      <Calendar onChange={onChange} value={value} />
    </DatePickerContainer>
  );
}

export default DatePickerComponent;
