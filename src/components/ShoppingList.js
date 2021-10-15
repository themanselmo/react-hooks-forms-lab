import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setFilter] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setFilter(event.target.value);
  }

  // filter dropdown to either
    // return all items
    // return items by category


  // then for text box
    // filter the result array returned from the dropdown
  const dropFilter = () => {
    if (selectedCategory === "All"){
      return items;
    }
    else {
      return items.filter(item => item.category === selectedCategory);
    }
  };

  const dropAndTextFilter = () => {
    if(filter.length > 0) {
      return dropFilter().filter(item => item.name.includes(filter))
    }
    else {
      return dropFilter()
    }
  }

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {dropAndTextFilter().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
