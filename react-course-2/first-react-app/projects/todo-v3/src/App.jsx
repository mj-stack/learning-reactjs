import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css"
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  // const initialTodoItems = [{
  //   name: 'Buy Milk',
  //   dueDate: '4/10/2023'
  // }, {
  //   name: 'Go to College',
  //   dueDate: '4/10/2023'
  // }, {
  //   name: 'Like this video',
  //   dueDate: 'Right now'
  // }]
  
  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    const todoItem = [...todoItems, {name: itemName, dueDate: itemDueDate}]
    setTodoItems(todoItem)
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems)
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleNewItem={handleNewItem} />
      {
        todoItems.length === 0 && <WelcomeMessage todoItems={todoItems} /> 
      }
      <TodoItems handleDeleteItem={handleDeleteItem} todoItems={todoItems} />
    </center>
  );
}

export default App;
