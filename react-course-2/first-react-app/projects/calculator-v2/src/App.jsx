import { useState } from 'react'
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'


function App() {
  const [calVal, setCalVal] = useState('')

  const onButtonClick = (buttonText) => {
    console.log(buttonText)
    if (buttonText === "C") {
      setCalVal("")
    } else if (buttonText === "=") {
      setCalVal(eval(calVal))
    } else {
      const newDisplayValue = calVal + buttonText
      setCalVal(newDisplayValue)
    }
  }

  return (
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
