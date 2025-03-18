function TodoItem({todoName, todoDate, handleDeleteItem}) {
  return(
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" onClick={() => handleDeleteItem(todoName)} className="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem