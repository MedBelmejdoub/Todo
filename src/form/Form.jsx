import React from "react";
import { useState } from "react";
import "./form.css";

function Form() {
  //   /create props for the form
  const [addDescription, setAddDescription] = useState();
  // const [addDate, setAddDate] = UseState();
  // const [addAction, setAddAction] = UseState();
  function descriptionHandler(e) {
    e.preventDefault();
    setAddDescription(e.target.value);
    console.log(addDescription);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <div className="form-container">
      <h1>Add new task</h1>
      <form className="form-items" method="_POST">
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          onChange={descriptionHandler}
        />
        <input type="date" id="date" name="date" placeholder="Date" />

        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
