import { useState } from 'react'
import { TodoProvider } from './Context/TodoContext'
import { useEffect } from 'react'
import InputBox from './Componets/InputBox';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos(prev => [...prev, { id: Date.now(), ...todo, completed: false }])
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  function updateTodo(id, todo) {
    setTodos(prev => prev.map(prevTodo => (prevTodo.id === id) ? todo : prevTodo))
  }

  function toggleTodo(id) {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo && todo.length > 0) {
      setTodos(todo)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log("Running")
  }, [todos])
  return (
    <TodoProvider value={{ todos, deleteTodo, updateTodo, addTodo, toggleTodo }} >
      <div className="min-h-screen w-full bg-gray-950  pt-28">
        <div>
          <InputBox />
        </div>
        <div>
          {/* {here our todos component will injected} */}
        </div>
      </div>
    </TodoProvider>
  )
}
export default App