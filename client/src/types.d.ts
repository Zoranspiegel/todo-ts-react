export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>;
export type TodoTitle = Pick<Todo, 'title'>;
export type TodoCompleted = Pick<Todo, 'completed'>;
export type OnRemoveTodoType = (id: TodoId) => void;
export type OnCompleteTodoType = (id: TodoId) => void;

export interface TodosProps {
  onRemoveTodo: OnRemoveTodoType
  onCompleteTodo: OnCompleteTodoType
  todos: Todo[]
}

export interface TodoProps extends Todo {
  onRemoveTodo: OnRemoveTodoType
  onCompleteTodo: OnCompleteTodoType
}
