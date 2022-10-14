import React, { useState, useEffect } from 'react'
import { taskValues } from '../assets/index'
import Modal from './Modal'


const CreateTask = () => {
    const [activeModal, setActiveModal] = useState(false)
    const [oneTask, setOneTask] = useState({})

    //console.log(taskValues, " taskValues ")

    useEffect( () => {
        getId()
    }, [])

    
    const getId = () => setOneTask({id : taskValues.length})
    
    const saveData = (section, info) => {
        let newTask = { ...oneTask }
        newTask[section] = info
        setOneTask(newTask)
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

        saveData('id', getId())
        saveData('date', getDateNow() )
        console.log("Formulario Submiteado")
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
                        <label className='titleModal'>Prioridad</label>
                        <div className='wrapperPiority'>
                            <input className='radioPriority noPriority' type='radio' value={0} name='priority' />
                            <input className='radioPriority minPriority' type='radio' value={1} name='priority' />
                            <input className='radioPriority normalPriority' type='radio' value={2} name='priority' />
                            <input className='radioPriority maxPriority' type='radio' value={3} name='priority' />
                        </div><br />
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