import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task/slice';
import userReducer from './teste/slice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    users: userReducer,
  },
});

export default store;
