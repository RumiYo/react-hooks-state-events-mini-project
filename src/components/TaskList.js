import React from "react";
import Task from "./Task"

function TaskList({ tasks, deleteTask, selectedCategory }) {
  let filteredTasks = [...tasks];

  if(selectedCategory === "All" || selectedCategory === undefined){
    filteredTasks= [...tasks];
  }else{
    filteredTasks = tasks.filter(task => task.category===selectedCategory)
    }

  const allDisplayedTasks = filteredTasks.map(task => {
    return (
  <Task text={task.text} category={task.category} key={task.text} deleteTask={deleteTask} /> 
    )})


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    {allDisplayedTasks}
    </div>
  );
}

export default TaskList;
