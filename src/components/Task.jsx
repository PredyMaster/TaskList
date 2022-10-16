import React, { useState } from 'react'

const Task = ({item, handleDragging}) => {
    const [priorityTask, setPriorityTask] = useState()

    const handleDragStart = (e) => {
        e.dataTransfer.setData('myTask', `${item.id}`)
        handleDragging(true)
    }

    const handleDragEnd = () => handleDragging(false)

    const printPriority = (priority) => {
        let priorityIcon = ''

        priorityIcon = priority.map( value => {
            let icon = '❗'
            return (icon.repeat(value))
        })

        return priorityIcon
    }

    const getStatusColor = (status) => {

        let priorityClass = ''

        switch(status){
            case 'por hacer' : priorityClass = 'tasksTodoBackground'; break;
            case 'comenzadas' : priorityClass = 'tasksStartedTitleBackground'; break;
            case 'completadas' : priorityClass = 'tasksCompletedTodoBackground'; break;
        }

        return priorityClass;
    }

    return (
        <div 
            className={`cardContainer ${getStatusColor(item.status)}`} 
            draggable 
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <p className='task'>{item.content}</p>
            {/* <p className='task'>{tasks.task}</p> */}

            <span className='priorityIcon'>{printPriority([item.priority])}</span>
        </div>
    )
}

export default Task;