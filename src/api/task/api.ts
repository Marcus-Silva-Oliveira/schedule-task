import axios from 'axios';
import { useQuery } from 'react-query';
import { Task, TaskInputRequest } from './type';

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return response.data;
};

export const useTasks = ({ onSuccess, onError }: TaskInputRequest = {}) => {
  return useQuery('tasks', fetchTasks, {
    onSuccess,
    onError,
  });
};
