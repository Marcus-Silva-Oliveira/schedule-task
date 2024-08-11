import { useState } from 'react';

import pushButton from '../../assets/Icons/navbar/Push-button.png';
import * as S from './styles';

export function DatePickerComponent() {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());
  const [activatedCalendar, setActivatedCalendar] = useState(true);

  const handleClickToShowCalendar = () =>
    setActivatedCalendar(!activatedCalendar);

  return (
    <S.CalendarContainer activeCalendar={activatedCalendar}>
      <S.ShowCalendar onChange={onChange} value={value} />
      <button onClick={handleClickToShowCalendar}>
        <img src={pushButton} />
      </button>
    </S.CalendarContainer>
  );
}
