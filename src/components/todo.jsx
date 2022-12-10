import React from "react";
import { UseTodoContext } from "../contexts/todoContext";
const Todo = ({ text, isCompleted, id }) => {
  const { toggleChecked } = UseTodoContext();
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
    </div>
  );
};

export default Todo;
