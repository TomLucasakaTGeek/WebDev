import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  fetch("https://localhost:3000/todos")
  .then(async function(res) {
    const json = await res.json({
    })
  })
  return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos></Todos>
      </div>
  )
}

export default App
