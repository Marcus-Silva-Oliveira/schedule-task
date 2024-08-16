import { baseState } from './base/slice';
import { taskState } from './task/slice';

export enum ModalsID {
  none,
  error,
}

export interface storeType {
  task: taskState;
  base: baseState;
}
