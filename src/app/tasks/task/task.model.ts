export interface Task {
    [x: string]: string | undefined;
    taskId: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }