import React, { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { Todo, TodoCompleted } from "./index";
import { UseTodoContext } from "../contexts/todoContext";
const Todos = () => {
  const { todos, type, removeAll } = UseTodoContext();
  const [todo, setTodo] = useState(todos);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  useEffect(() => {
    const filterTodo = () => {
      if (type === "active") {
        setTodo(todos.filter((item) => item?.isCompleted === false));
      } else if (type === "completed") {
        setTodo(todos.filter((item) => item?.isCompleted === true));
      } else {
        setTodo(todos);
      }
    };
    filterTodo();
  }, [todos, type]);
  return (
    <div className="todos">
      {todo &&
        type === "completed" &&
        todo.map((item) => {
          return <TodoCompleted {...item} key={item?.id} />;
        })}
      {type === "completed" && (
        <button className="delete-all" onClick={removeAll}>
          <FiTrash />
          delete all
        </button>
      )}
      {todo &&
        type !== "completed" &&
        todo.map((item) => {
          return <Todo {...item} key={item?.id} />;
        })}
    </div>
  );
};

export default Todos;
