import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css"

function App() {

  const todoItems = [{
    name: 'Buy Milk',
    dueDate: '4/10/2023'
  }, {
    name: 'Go to College',
    dueDate: '4/10/2023'
  }, {
    name: 'Like this video',
    dueDate: 'Right now'
  }]

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
