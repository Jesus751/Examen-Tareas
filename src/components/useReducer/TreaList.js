import React from 'react'
import { TareaListItem } from './TareaListItem'

export const TreaList = ({tareas, handleEliminar, handleCompletado}) => {
  return (
    <ul className='list-group list-group-flush'>
        {
            tareas.map((tarea,i ) => (
                
                <TareaListItem 
                key={tarea.id}
                tarea={tarea}
                i={i}
                handleEliminar={handleEliminar}
                handleCompletado={handleCompletado}
                />
            ))
        }
    </ul>
  )
}
