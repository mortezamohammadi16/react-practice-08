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

  const toggelTodoDone = (id) =>{
    setTodos(prev =>prev.map(
      todo => todo.id === id ? {...todo, done: !todo.done} : todo
    ))
  }

  const deleteTodo = (id)=>{
    setTodos(prev => prev.filter(todo =>todo.id !== id))
  }



  return (
    <>
     <Header />
     <TodoInput 
      value = {task}
      onChange ={(e)=>setTask(e.target.value)}
      onAdd = {handelAddTodo}
     />
     <Card 
     todos ={todos}
     onToggle = {toggelTodoDone}
     onDelete = {deleteTodo}
     />
    </>
  )
}

export default App
