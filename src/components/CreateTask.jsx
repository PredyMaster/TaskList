import React, { useState, useEffect } from 'react'
import { taskValues } from '../assets/index'
import Modal from './Modal'


const CreateTask = ({setTasks}) => {
    const [activeModal, setActiveModal] = useState(false)
    const [oneTask, setOneTask] = useState()

    //console.log(taskValues, " taskValues ")
    //console.log(oneTask, " oneTask ")

    //console.log(setTaskList, ' setTaskList ')

    useEffect( () => {
        getId()
    }, [])
    
    const getId = () => setOneTask({id : taskValues.length})
    
    const saveData = (section, info) => {
        const newTask = {
            [section]: info
        }
        const ArrayTask = { ...oneTask }
        const taskForSave = Object.assign(ArrayTask, newTask);
        setOneTask(taskForSave)
    }
    
    const saveTask = () => {

        // saveData('id', getId())
        // saveData('date', getDateNow() )

        //Almacenado en Assets
        taskValues.push(oneTask)
        setTasks(oneTask)

        setActiveModal(false)

    }

    const getDateNow = () => {
        const currentDate = new Date()
        const day = currentDate.getDate()
        const month = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()
        return( day + '/' + month + '/' + year )
    }

    const submit = (e) => {
        e.preventDefault()
        saveTask()
    }

    return (
        <>
            {activeModal &&
                <Modal>
                    <input className='close' type="button" value=" X " onClick={() => setActiveModal(false)} />
                    <form onSubmit={submit}>

                        <label className='titleModal'>Titulo tarea</label><br />
                        <input type='text' className='Task input' onChange={e => saveData('task', e.target.value)} /><br />
                        <label className='titleModal'>Descripción tarea</label><br />
                        <textarea className='Description input' onChange={e => saveData('description', e.target.value)} /><br />

                        <div className='middleSection'>
                            <label className='titleModal'>Prioridad</label>
                            <div className='wrapperPiority'>
                                <input className='radioPriority noPriority' type='radio' value={0} name='priority' />
                                <input className='radioPriority minPriority' type='radio' value={1} name='priority' />
                                <input className='radioPriority normalPriority' type='radio' value={2} name='priority' />
                                <input className='radioPriority maxPriority' type='radio' value={3} name='priority' />
                            </div><br />
                        </div>

                        <div className='middleSection'>
                            <label className='titleModal'>Fecha Entrega</label>
                                <input className='datePicker' type='date'></input>
                        </div>

                        <div className='wrapperButtons'>
                            <input className='button submitButton' type="submit" value="Crear" />
                            <input className='button cancelButton' type="button" value="Cancelar" onClick={() => setActiveModal(false)} />
                        </div>

                    </form>
                </Modal>
            }

            <button className='addTask' onClick={() => setActiveModal(true)}>Crear tarea</button>
        </>
    )

}

export default CreateTask