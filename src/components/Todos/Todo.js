import styles from './Todo.module.css'
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${todo.isComplited && styles.completedTodo}`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        onClick={() => deleteTodo(todo.id)}
        className={styles.iconeDelete}
      />
      <FaCheck
        onClick={() => {
          toggleTodo(todo.id)
        }}
        className={styles.iconeCheck}
      />
    </div>
  )
}

export default Todo
