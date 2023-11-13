import { useState } from "react";
import useTodo from "../todoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { todoAdd, todoList } = useTodo();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!todo) return;

    todoAdd({ todo: todo, completed: false });
    setTodo("");
  };

  console.log(todoList);

  return (
    <form className="flex" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add ..."
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
