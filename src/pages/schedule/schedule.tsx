import { ReactElement, useEffect, useState } from 'react';
import TaskApi from '../../api/task/api';
import { Task } from '../../api/task/type';
import { TaskComponent } from '../../components/taskcomponent/taskcomponent';

const truncateString = (title: string, length: number): string => {
  if (title.length <= length) return title;

  return title.substring(0, length) + '...';
};

const ScheduleScreen = (): ReactElement => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { getTask } = TaskApi();

  const taskDatatableContent = (
    <div>
      {tasks.map((task: Task) => {
        return (
          <TaskComponent key={task.id} Title={truncateString(task.title, 15)} />
        );
      })}
    </div>
  );

  useEffect(() => {
    getTask({
      onSuccess: setTasks,
    });
  }, []);
  return <>{taskDatatableContent}</>;
};

export default ScheduleScreen;
