import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([])

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value 
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      event.target.value = ""
    }
  }

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMsg foodItems={foodItems} />
        <FoodItems foodItems={foodItems} />
      </Container>
      {/* <Container>
        <p>Above is the list of healthy food that are good for your health and well being</p>
      </Container> */}
    </>
  );
}

export default App;
