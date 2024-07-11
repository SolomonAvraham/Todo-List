import { TodoProps } from "../types";

export default function ToDoList({
  todo,
  removeTodo,
  updatedTodos,
}: TodoProps) {
  const doneTask = todo.filter((todo) => todo.isComplete === true).length;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todo, i: number) => {
            if (!todo.isComplete) {
              return (
                <tr key={i}>
                  <td>{todo.text}</td>
                  <td>
                    <button
                      key={todo.text}
                      onClick={() => updatedTodos(i, !todo.isComplete)}
                    >
                      {todo.isComplete ? "UNDO" : "DONE"}
                    </button>
                  </td>
                  <td>
                    <button
                      key={todo.text}
                      onClick={() => removeTodo(todo.text)}
                    >
                      REMOVE
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <hr />
      {doneTask > 0 && (
        <>
          <h3 className="secHeader">Completed</h3>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {todo
                .filter((todo) => todo.isComplete)
                .map((todo, i) => (
                  <tr key={i}>
                    <td>{todo.text}</td>
                    <td>
                      <button
                        key={todo.text}
                        onClick={() => updatedTodos(i, !todo.isComplete)}
                      >
                        {todo.isComplete ? "UNDO" : "DONE"}
                      </button>
                    </td>
                    <td>
                      <button
                        key={todo.text}
                        onClick={() => removeTodo(todo.text)}
                      >
                        REMOVE{" "}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}{" "}
    </>
  );
}
