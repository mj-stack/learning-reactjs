import Item from "./Item"

function FoodItems({foodItems}) {

  return (
    <ul className="list-group">
      {foodItems.map((food) => (
        <Item key={food} food={food}/>
        ))}
    </ul>
  )
}

export default FoodItems