import React from "react";
import { FiTrash } from "react-icons/fi";
import { UseTodoContext } from "../contexts/todoContext";
const Todo = ({ text, isCompleted, id }) => {
  const { toggleChecked, removeTodo } = UseTodoContext();
  return (
    <div className="todo">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={isCompleted ? "checked" : ""}
          onChange={() => toggleChecked(id)}
        />
        <p className={`${isCompleted ? "completed" : ""} `}>{text}</p>
      </div>

      <FiTrash className="icon-remove" onClick={() => removeTodo(id)} />
    </div>
  );
};

export default Todo;
