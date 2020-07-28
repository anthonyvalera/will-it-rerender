import React, { memo, useCallback, useState } from "react";

const groceryList = [
  {
    id: "100",
    name: "Bananas"
  },
  {
    id: "101",
    name: "Increments"
  },
  {
    id: "102",
    name: "Bread"
  }
]

const MemoItem = memo(function Item({ name, removeItem }) {
  return (
    <li onClick={removeItem}>{name}</li>
  )
})

function GroceryList() {
  const [items, setItems] = useState(groceryList);

  const removeItem = useCallback(itemToRemove => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemToRemove))
  }, [])

  return (
    <div>
      <h2>Grocery List</h2>
      <em>Tap to remove</em>
      <ul>      
        {
          items.map(({ id, name }) => {
            return (
              <MemoItem
                key={id}
                id={id}
                name={name}
                removeItem={() => removeItem(id)}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

export default GroceryList;
