import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHadler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      })
    )
  }
  const countTodoComplited = todos.filter((todo) => todo.isComplited).length
  const resetTodosHandler = () => {
    setTodos([])
  }
  const complitedDeleteTodosHandler = () => {
    setTodos(todos.filter((todo) => todo.isComplited !== true))
  }
  return (
    <div className="App">
      <h1 className="app_title">Todo App</h1>
      <TodoForm addTodo={addTodoHadler} />
      {!!todos.length && (
        <TodosActions
          disabled={countTodoComplited === 0 ? true : false}
          resetTodo={resetTodosHandler}
          actionDelete={complitedDeleteTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!countTodoComplited &&
        (countTodoComplited > 1 ? (
          <h1>{`You have completed ${countTodoComplited} todos`}</h1>
        ) : (
          <h1>{`You have completed ${countTodoComplited} todo`}</h1>
        ))}
    </div>
  )
}

export default App
