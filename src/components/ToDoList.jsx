import { useState } from "react"
import { Status } from "../interfaces"
import ColumnTask from "./ColumnTasks"
import { taskValues } from "../assets"

const allStatus = ['por hacer', 'comenzadas', 'completadas']

const ToDoList = () => {
    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState(taskValues)

    //console.log(listItems, " listItems")

    const handleDragging = (dragging) => setIsDragging(dragging)

    const handleUpdateList = (id, status) => {
        const idSelected = Number(id)
        let taskSelected = listItems.find(item => item.id === idSelected)

        

        if(taskSelected && taskSelected.status !== status){
            
            taskSelected.status = status
            let newArray = [...listItems]
            newArray[idSelected] = taskSelected
            setListItems(newArray)

            //setListItems( prev => ([taskSelected, ...prev.filter(item => item.id !== idSelected)]))
        }

    }

    return(
        <div className="grid">
            {
                allStatus.map( (status, index) => {                    
                    return <ColumnTask
                        key={ 'Col' + index}
                        items={listItems}
                        status={status}

                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                })
            }


        </div>
    )

}

export default ToDoList