import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todoList: [
    {
      id: 1,
      todo: "",
      completed: false,
    },
  ],
  todoUpdate: (id, todo) => {},

  todoRemove: (id) => {},

  todoAdd: (id) => {},

  toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
