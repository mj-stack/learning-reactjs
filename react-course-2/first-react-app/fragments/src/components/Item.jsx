import styles from './item.module.css'

function Item({food, bought, handleBuyButton}) { 

  return (
    <li className={`${styles['kg-item']} list-group-item ${bought && 'active'}`}>
      <span className={`${styles['kg-span']}`}>{food}</span>
      <button value={false} className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >Buy</button>
    </li>
  )
}

export default Item