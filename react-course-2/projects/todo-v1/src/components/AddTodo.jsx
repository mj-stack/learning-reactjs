function AddTodo() {
  return(
    <div style={{"textAlign": "left"}} className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div class="col-4">
          <input type="date" name="" id="" />
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-success kg-button">Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo