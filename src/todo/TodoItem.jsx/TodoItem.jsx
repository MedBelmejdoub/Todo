import React from "react";
import "./todoitem.css";
function TodoItem() {
  const description="test",date="t55",valide="false";
  
  return (
    <div className="container">
      <div>{description}</div>
      <div>{date}</div>
      <input type="checkbox" name="" id="" />
      <div>
        <button type="add">Add</button>
        <button type="supp">supp</button>
        <button type="edit">edit</button>
      </div>
    </div>
  );
}

export default TodoItem;
