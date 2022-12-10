import { useContext, createContext, useState, useEffect } from "react";
const TodoContext = createContext();

export function UseTodoContext() {
  return useContext(TodoContext);
}
export const TodoContextProvider = ({ children }) => {
  const [type, setType] = useState("");
  const [todos, setTodos] = useState(
    localStorage.getItem("todo-app")
      ? JSON.parse(localStorage.getItem("todo-app"))
      : []
  );
  const toggleChecked = (id) => {
    setTodos((todos) => {
      return todos.map((item, index) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return { ...item };
        }
      });
    });
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item?.id !== id));
  };
  const removeAll = () => {
    setTodos(todos.filter((item) => item?.isCompleted == false));
  };
  useEffect(() => {
    localStorage.setItem("todo-app", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        toggleChecked,
        type,
        setType,
        removeTodo,
        removeAll,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
