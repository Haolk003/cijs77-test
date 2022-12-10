import React, { useEffect } from "react";
import { UseTodoContext } from "../contexts/todoContext";
const Navbar = () => {
  const { setType, type } = UseTodoContext();
  const handleSelect = (select) => {
    setType(select);
  };

  useEffect(() => {
    console.log(type);
  }, [type]);
  return (
    <div className="navbar">
      <p
        className={`${type === "" && "selected"}`}
        onClick={() => handleSelect("")}
      >
        All
      </p>
      <p
        className={`${type === "active" && "selected"}`}
        onClick={() => handleSelect("active")}
      >
        Active
      </p>
      <p
        className={`${type === "completed" && "selected"}`}
        onClick={() => handleSelect("completed")}
      >
        Completed
      </p>
    </div>
  );
};

export default Navbar;
