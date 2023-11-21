import React from "react";

function CategoryFilter({categories, category, onSelect}) {

  const categoryButton = categories.map(element =>{
    const className = element===category ? "selected" : ""
    return (
    <button key={element} className={className} id={element} onClick={selectCategory} >{element}</button>
    )
  })

  function selectCategory(event){
    const selectedButton = event.target.id;
    onSelect(selectedButton);
    // categories.map(category =>{
    //   if(category === selectedCategory){
    //     document.getElementById(category).className = "selected";
    //   }else{
    //     document.getElementById(category).classList.remove("selected");     
    //   }
      // })
;

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButton}
    </div>);
}

export default CategoryFilter;
