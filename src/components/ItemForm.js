import React from "react";
import { useState } from "react/cjs/react.development";
import { v4 as uuid } from "uuid";

function ItemForm({addItem}) {
  const [name, setName] = useState('')
  const [produce, setProduce] = useState('Produce')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleProduce = (e) => {
    setProduce(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem({id: uuid(), name: name, category: produce})
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleProduce} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
