import React from 'react'
import Task from './Task'
//import { Status } from '../interfaces'


const ColumnTask = ({items = [], status, tasks, isDragging, handleDragging, handleUpdateList}) => {

    console.log(" 💀 Render 💀 ")
    console.log(tasks, " las tasks en COLUMNTASKS" )

    const handleDragOver = e => e.preventDefault()

    const handleDrop = e => {
        e.preventDefault()
        const id = e.dataTransfer.getData('myTask')
        handleUpdateList(id, status)
        handleDragging(false)
    }

    const setColorColumn = () => {
        switch(status){
            case 'por hacer' : return 'tasksTodo'; break;
            case 'comenzadas' : return 'tasksStartedTitle'; break;
            case 'completadas' : return 'tasksCompletedTodo'; break;  
        }
    }

    return (
        <div 
            // className={`layaoutNormal ${isDragging ? 'layoutDragging' : ''}`}
            className='layoutCards'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        
        >
            <h2 className={setColorColumn()}>{'Tareas ' + status}</h2>
            <div className={`layaoutNormal ${isDragging ? 'layoutDragging' : ''}`}>

                {/* ❗❗❗ Hacer el map con el "tasks ❗❗❗ */}

                {
                    items.map(item => {
                        // {status === item.status && 
                        //     <Task key={item.id} item={item} />
                        // }

                        if(status === item.status){
                            return <Task 
                                        key={item.id} 
                                        item={item} 
                                        handleDragging={handleDragging}
                                        tasks={tasks}
                                    />
                        }

                    } )
                }
            </div>

        </div>
    )
}

export default ColumnTask;