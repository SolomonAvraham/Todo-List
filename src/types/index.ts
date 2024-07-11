export type ToDoListProps = {
  text: string;
  isComplete: boolean;
}[];

export type TodoProps = {
  todo: ToDoListProps;
  removeTodo: (text: string) => void;
  updatedTodos: (index: number, isCompleted: boolean) => void;
};

export type AddTodoProps = {
  addTodo: (text: string) => void;
};
