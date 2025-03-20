import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Clock from './components/Clock'
import Heading from './components/heading'
import Moto from './components/Moto'

function App() {
  

  return (
    <div className='clock-container'>
      <Heading />
      <Moto />
      <Clock />
    </div>
  )
}

export default App
