import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css"

function TodoItems({todoItems, handleDeleteItem}) {
  return (
      <div className={styles.itemsContainer}>
        {
          todoItems.map(item => 
            <TodoItem 
              handleDeleteItem={handleDeleteItem} 
              key={item.name} 
              todoName={item.name} 
              todoDate={item.dueDate} 
            />)
        }
      </div>
  )
}

export default TodoItems