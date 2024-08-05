import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task/slice';
import baseREducer from './base/slice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    base: baseREducer,
  },
});

export default store;
