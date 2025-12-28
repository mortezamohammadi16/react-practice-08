import { useState } from 'react'
import Header from './pages/Header'
import TodoInput from './pages/TodoInput'
import Card from './pages/card'

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const handelAddTodo = () =>{
    if(!task.trim()) return

    const newTodo = {
      id: Date.now(),
      title: task,
      done: false,
    }

    setTodos(prev=>[...prev,newTodo])
    setTask('')
  }



  return (
    <>
     <Header />
     <TodoInput 
      value = {task}
      onChange ={(e)=>setTask(e.target.value)}
      onAdd = {handelAddTodo}
     />
     <Card />
    </>
  )
}

export default App
