import ToDoList from './components/ToDoList'
import CreateTask from './components/CreateTask'
import './App.css'

function App() {
 
  return (
    <div className='wrapperRoot'>
      <h1 className='TaskListTitle'>Lista de tareas</h1>
      <CreateTask/>
      <ToDoList/>
    </div>
  )
}

export default App
