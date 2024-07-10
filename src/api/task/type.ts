export enum TaskType {
  analysis,
  problem,
  suport,
  test,
}

//TESTE
export interface Task {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// export interface Task {
//   Title: string;
//   Assign: string;
//   StartDate?: Date | string | number;
//   EndDate?: Date | string | number;
//   TaskType?: TaskType;
//   Description?: string;
// }

export interface TaskInputRequest {
  onSuccess?: (data: Task[]) => void;
  onError?: (error: boolean) => void;
}
