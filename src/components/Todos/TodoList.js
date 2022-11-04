import Todo from './Todo'

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div>
      {todos.length === 0 && <h1>Todo list is empty</h1>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
