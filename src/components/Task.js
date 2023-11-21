import React from "react";

function Task({text, category, deleteTask }) {

  function deleteButtonClicked(event){
    const deteteItem = event.target.id;
    deleteTask(deteteItem);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id={text} onClick={deleteButtonClicked}>X</button>
    </div>
  );
}

export default Task;
