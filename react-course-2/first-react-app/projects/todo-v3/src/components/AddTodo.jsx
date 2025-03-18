import { useState } from "react"

function AddTodo({handleNewItem}) {

  const [todoName, setTodoName] = useState()
  const [todoDueDate, setTodoDueDate] = useState()

  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }
  const handleDateChange = (event) => {
    setTodoDueDate(event.target.value)
  }
  const handleAddButtonClick = () => {
    handleNewItem(todoName, todoDueDate)
    setTodoName("")
    setTodoDueDate("")
  }

  return(
    <div style={{"textAlign": "left"}} className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input onChange={handleNameChange} type="text" placeholder="Enter Todo here" required />
        </div>
        <div className="col-4">
          <input onChange={handleDateChange} type="date" required />
        </div>
        <div className="col-2">
          <button type="button" onClick={handleAddButtonClick} className="btn btn-success kg-button">Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo