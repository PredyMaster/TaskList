import React from 'react'
import Task from './Task'
//import { Status } from '../interfaces'


const ColumnTask = ({status, items = [], isDragging, handleDragging, handleUpdateList}) => {

    const handleDragOver = e => e.preventDefault()

    const handleDrop = e => {
        e.preventDefault()
        const id = e.dataTransfer.getData('myTask')
        handleUpdateList(id, status)
        handleDragging(false)
    }

    const setColorColumn = () => {

        console.log(status, " el status ")
        console.log(items, " el item ")

        // .tasksCompletedTodo{
        //     border-bottom: 0.1rem solid gray;
        //   }
        //   .tasksStartedTitle{
        //     border-bottom: 0.1rem solid #00aaff;
        //   }
        //   .tasksCompletedTodo{
        //     border-bottom: 0.1rem solid green;
        //   }



        switch(status){
            case 'por hacer' : return 'tasksTodo'; break;
            case 'comenzadas' : return 'tasksStartedTitle'; break;
            case 'completadas' : return 'tasksCompletedTodo'; break; 
        return
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
                                    />
                        }

                    } )
                }
            </div>

        </div>
    )
}

export default ColumnTask;