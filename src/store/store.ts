import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task/slice';
import baseReducer from './base/slice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    base: baseReducer,
  },
});

export default store;
