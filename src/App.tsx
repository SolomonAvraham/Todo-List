import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";
import { ToDoListProps } from "./types";

const todoStorage = localStorage.getItem("todo");

function App() {
  const [todo, setTodo] = useState<ToDoListProps>(
    todoStorage ? JSON.parse(todoStorage) : []
  );

  const addTodo = (text: string) => {
    setTodo([...todo, { text, isComplete: false }]);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const updatedTodos = (index: number, isCompleted: boolean) => {
    const updatedTodos = [...todo];
    updatedTodos[index] = { ...updatedTodos[index], isComplete: isCompleted };
    setTodo(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
  };

  const removeTodo = (text: string) => {
    const checkList = todo.filter((todo) => todo.text !== text);
    setTodo([...checkList]);
    localStorage.setItem("todo", JSON.stringify([...checkList]));
  };

  return (
    <div className="main">
      <h1 className="mainHeader">Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <ToDoList
        todo={todo}
        removeTodo={removeTodo}
        updatedTodos={updatedTodos}
      />
    </div>
  );
}

export default App;
