import { ReactElement } from 'react';
import { useTasks } from '../../api/task/api';
import { Task } from '../../api/task/type';

const ScheduleScreen = (): ReactElement => {
  const { data, isLoading } = useTasks({
    onSuccess: (data: Task[]): void => {
      console.log('Resultado - ', data);
    },
    onError: (): void => {
      console.log('Error ao tratar a requisição');
    },
  });
  return isLoading ? <>Carregando</> : <>Dados OK</>;
};

export default ScheduleScreen;
