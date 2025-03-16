import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'
import './App.css'

function App() {

  // let foodItems = []
  let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee']

  return (
    <>
      <h1 className='food-heading'>Healthy food</h1>
      <ErrorMsg foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </>
  )
}

export default App
