import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css"
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  
  const [todoItems, setTodoItems] = useState([])

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentVal) => [...currentVal, {name: itemName, dueDate: itemDueDate}] )
  }

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems)
  }

  return (
    <TodoItemsContext.Provider 
      value={{
        todoItems,
        addNewItem,
        deleteItem
      }} >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
