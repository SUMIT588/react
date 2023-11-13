import React, { useEffect } from "react";

import { TodoContextProvider } from "./todoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoAdd = (todo) => {
    setTodoList((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const todoUpdate = (id, todoUpdate) => {
    setTodoList((todoList) =>
      todoList.map((prevTodo) => (prevTodo.id === id ? todoUpdate : prevTodo))
    );
  };

  const todoRemove = (id) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((prevList) =>
        prevList.id === id
          ? { ...prevList, completed: !prevList.completed }
          : prevList
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos && todos.length > 0) {
      setTodoList(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContextProvider
      value={{ todoList, todoUpdate, todoRemove, todoAdd, toggleComplete }}
    >
      <h2 className="bg-green-600 text-white text-center">Todo</h2>
      <TodoForm />

      {todoList.map((todo) => (
        <div key={todo.id} className="w-full">
          <TodoItem todo={todo} />
        </div>
      ))}
    </TodoContextProvider>
  );
}

export default App;
