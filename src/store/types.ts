import { baseState } from './base/slice';
import { taskState } from './task/slice';

export interface storeType {
  task: taskState;
  base: baseState;
}
