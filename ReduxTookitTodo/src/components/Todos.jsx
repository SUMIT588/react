import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="mt-8">
      <ul className="flex flex-col items-center  ">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white p-4 shadow-md rounded w-44 m-4"
          >
            <div >{todo.text}</div>
            <button
              onClick={() => {
                console.log(todo.id)
                dispatch(removeTodo(todo.id));
              }}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
