import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const displayCategories = categories.filter(item => item !== "All");
 
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Code");

  function inputNewTask(e){
    setNewTaskText(e.target.value);
  }

  function inputNewTaskCategory(e){
    setNewTaskCategory(e.target.value);
  }

  function addTaskClick(event){
    event.preventDefault();
    console.log("click")
    const newItem = {
      text: newTaskText,
      category: newTaskCategory,
    }
    onTaskFormSubmit(newItem);
  }

  return (
    <form className="new-task-form" onSubmit={addTaskClick}>
      <label>
        Details
        <input type="text" name="text" onChange={inputNewTask} />
      </label>
      <label>
        Category
        <select name="category" onChange={inputNewTaskCategory}>
          {/* render <option> elements for each category here */}
          {displayCategories.map(item => <option key={item}>{item}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
