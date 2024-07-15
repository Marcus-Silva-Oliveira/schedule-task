import { ReactElement } from 'react';

import DatePickerComponent from '../../components/datepicker/datepicker';

const ScheduleScreen = (): ReactElement => {
  const tasks: any = [
    {
      title: 'Reunião com cliente',
    },
    {
      title: 'Mandar E-mail para o banco',
    },
    {
      title: 'Finalizar proposta de marketing',
    },
    {
      title: 'Jantar com espora',
    },
  ];

  const TasksContainer = (): React.ReactElement =>
    tasks.map((task: any) => <>{task.title}</>);

  return (
    <div>
      <DatePickerComponent />
      <hr />
      <TasksContainer />
    </div>
  );
};

export default ScheduleScreen;
