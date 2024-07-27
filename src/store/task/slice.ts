import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../api/task/type';

export interface taskState {
  tasks: Task[];
}

const initialState: taskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getTasks: (state) => {
      state.tasks;
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { getTasks, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
