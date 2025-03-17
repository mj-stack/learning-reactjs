import { useState } from "react"
import Item from "./Item"

function FoodItems({foodItems}) {

  const [activeItems, setActiveItems] = useState([])

  let onBuyButton = (food, event) => {
    let newItems = [...activeItems, food]
    setActiveItems(newItems)
  }

  return (
    <ul className="list-group">
      {foodItems.map((food) => (
        <Item 
          key={food} 
          food={food} 
          handleBuyButton={(event) => onBuyButton(food, event) }
          bought={activeItems.includes(food)}
        />
      ))}
    </ul>
  )
}

export default FoodItems