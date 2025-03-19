import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css"
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  
  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentVal) => [...currentVal, {name: itemName, dueDate: itemDueDate}] )
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
