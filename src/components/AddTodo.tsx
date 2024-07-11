import React, { useState } from "react";
import { AddTodoProps } from "../types";

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [error, setError] = useState<string | null>(null);

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setError(null);
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem("todo") as HTMLInputElement;

    if (input.value === "") {
      setError("Input is empty");
      return;
    }
    addTodo(input.value);
    form.reset();
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="What needs to be done?"
      />
      {error && <p className="error">{error}</p>}
      <button>Add</button>
    </form>
  );
}
