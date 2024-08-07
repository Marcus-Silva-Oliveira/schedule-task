export enum TaskType {
  analysis,
  problem,
  support,
  test,
  none,
}

export interface Task {
  id?: number;
  title: string;
  assign: string;
  startDate?: Date | string | number;
  endDate?: Date | string | number;
  taskType?: TaskType;
  description?: string;
}

export interface TaskGetRequest {
  onSuccess?: (data: Task[]) => void;
  onError?: (error: boolean) => void;
}
export interface TaskPostRequest {
  task: Task;
  onSuccess?: () => void;
  onError?: (error: boolean) => void;
}
