import styles from './item.module.css'

function Item({food}) {

  const handleBuyButtonClicked = () => {
    console.log(`${food} being bought`)
  } 

  return (
    <li className={`${styles['kg-item']} list-group-item`}>
      <span className={`${styles['kg-span']}`}>{food}</span>
      <button className={`${styles.button} btn btn-info`}
        onClick={handleBuyButtonClicked}
      >Buy</button>
    </li>
  )
}

export default Item