import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState([...TASKS]);
  const [category, setCategory] =useState();
  // const allCategories = [...CATEGORIES];

  function updateTask(text){
    const newTasks = tasks.filter(task => task.text !== text)
    setTasks(newTasks);
  }

  function updateCategory(item){
    setCategory(item);
  }

  function addTask(newTask){
    setTasks([...tasks,newTask]);

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} category={category}  onSelect={updateCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={tasks} deleteTask={updateTask} selectedCategory={category} />
    </div>
  );
}

export default App;
