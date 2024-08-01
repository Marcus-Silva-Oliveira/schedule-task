export enum TaskType {
  Acquistion,
  Collect,
  Delivery,
}

export interface Task {
  id?: number;
  Title?: string;
  Assign?: string;
  startDate?: Date;
  endDate?: Date;
  type?: TaskType;
  description?: string;
}
