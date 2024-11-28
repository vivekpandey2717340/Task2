export interface Task {
  id: string;
  content: string;
}

export interface ColumnType {
  id: string;
  title: string;
  tasks: Task[];
}
