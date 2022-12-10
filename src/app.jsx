import React, { useState } from "react";
import { Input, Navbar, Todos } from "./components";
import { TodoContextProvider } from "./contexts/todoContext";
const App = () => {
  return (
    <div className="app">
      <h2>#todo</h2>
      <TodoContextProvider>
        <Navbar />
        <Input />
        <Todos />
      </TodoContextProvider>
    </div>
  );
};

export default App;
