import { Task, TaskGetRequest, TaskPostRequest } from './type';
import axiosInstance from '../axiosConfig';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import store from '../../store/store';
import { setTasks } from '../../store/task/slice';

const fetchTasks = async (): Promise<Task[]> => {
  const response = await axiosInstance.get('/task');
  return response.data;
};

const _get = () => {
  return useQuery('task', fetchTasks, {
    onSuccess: (data): void => {
      store.dispatch(setTasks(data));
    },
  });
};

const saveNewTask = async ({ task }: TaskPostRequest): Promise<Task[]> => {
  const response = await axiosInstance.post('/task', task);
  return response.data;
};

const _post = () => {
  const queryClient = useQueryClient();
  return useMutation(saveNewTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('task');
    },
  });
};

const editTask = async ({ task }: TaskPostRequest): Promise<Task[]> => {
  const response = await axiosInstance.put(`/task/${task.id}`, task);
  return response.data;
};

const _put = () => {
  const queryClient = useQueryClient();
  return useMutation(editTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('task');
    },
  });
};

const TaskApi = () => {
  const get = _get();
  const post = _post();
  const putTask = _put();

  const getTask = ({ onSuccess, onError }: TaskGetRequest) => {
    const fetchData = async () => {
      try {
        const result = await get.refetch();
        if (result.isSuccess) onSuccess?.(result.data);
      } catch (error) {
        onError?.(true);
      }
    };

    fetchData();
  };
  const saveTask = ({ task, onSuccess, onError }: TaskPostRequest) => {
    post.mutate({
      task,
      onSuccess,
      onError,
    });
  };
  const upadateTask = ({ task, onSuccess, onError }: TaskPostRequest) => {
    putTask.mutate({
      task,
      onSuccess,
      onError,
    });
  };

  return {
    getTask,
    saveTask,
    upadateTask,
  };
};

export default TaskApi;
