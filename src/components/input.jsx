import React, { useState } from "react";
import { UseTodoContext } from "../contexts/todoContext";
const Input = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const { setTodos } = UseTodoContext();
  const handleInput = (e) => {
    setTodoTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle) {
      const id = new Date().getTime();
      setTodos((todos) => [
        ...todos,
        { text: todoTitle, isCompleted: false, id: id },
      ]);
      setTodoTitle("");
    }
  };
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add details"
        onChange={handleInput}
        value={todoTitle}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
