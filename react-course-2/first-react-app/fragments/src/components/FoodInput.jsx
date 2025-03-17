import styles from './FoodInput.module.css'

function FoodInput({handleKeyDown}) {

  return(
    <input onKeyDown={handleKeyDown} className={styles.foodInput} type="text" placeholder='Enter food item here' />
  )
}

export default FoodInput