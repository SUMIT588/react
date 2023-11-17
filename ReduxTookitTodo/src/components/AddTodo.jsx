import React, { useState } from "react";

import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
      <form onSubmit={addHandleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="todo"
            className="block text-sm font-medium text-gray-600"
          >
            Todo:
          </label>
          <input
            id="todo"
            type="text"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
