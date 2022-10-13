import React, {useState} from "react";
import { v4 as uuid } from "uuid"



function ItemForm({onItemFormSubmit}) {

  const [itemData, setItemData] = useState({
    name:"",
    category:"Produce",
  })

  const changeHandler = event => {
    const key = event.target.name
    const value = event.target.value
    setItemData({...itemData, [key]:value})
  }

  const submitHandler = event => {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      ...itemData
    } 
    onItemFormSubmit(newItem)
  }



  return (
    <form className="NewItem" onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" name="name" onChange={changeHandler}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={changeHandler}>
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
