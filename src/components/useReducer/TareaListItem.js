import React from 'react'

export const TareaListItem = ({tarea, i, handleEliminar, handleCompletado}) => {
  return (
        <li
            key={tarea.id}
            className='list-group-item'
        > 
            <p 
                className={`${tarea.done && 'completado'}`}
                onClick={()=>handleCompletado(tarea.id)}
            >
                {i + 1}. {tarea.descripcion} 
            </p>
            <button 
                className='btn btn-danger'
                onClick={() => handleEliminar(tarea.id)}
            >
                Borrar
            </button>
        </li>
  )
}
