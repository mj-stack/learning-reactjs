import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = []
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <ErrorMsg foodItems={foodItems} />
        <FoodInput />
        <FoodItems foodItems={foodItems} />
      </Container>
      {/* <Container>
        <p>Above is the list of healthy food that are good for your health and well being</p>
      </Container> */}
    </>
  );
}

export default App;
