import React, { useState } from 'react'
import ToDoList from './components/ToDoList'
import CreateTask from './components/CreateTask'
import './App.css'

function App() {
  const [taskList, setTaskList] = useState({})
  
  console.log(taskList, " LA TASKLIST 💖")
 
  return (
    <div className='wrapperRoot'>
      <h1 className='TaskListTitle'>Lista de tareas</h1>
      <CreateTask setTasks={setTaskList} />
      <ToDoList tasks={taskList} />
    </div>
  )
}

export default App
