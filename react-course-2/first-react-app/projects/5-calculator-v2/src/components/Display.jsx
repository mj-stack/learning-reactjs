import styles from './Display.module.css'

function Display({calVal}) {
  return <input className={styles.display} type="text" value={calVal} readOnly />
}

export default Display