import styles from './FoodInput.module.css'

function FoodInput() {

  const handleOnChange = (event) => {
    console.log(event.target.value)
  }

  return(
    <input onChange={handleOnChange} className={styles.foodInput} type="text" placeholder='Enter food item here' />
  )
}

export default FoodInput