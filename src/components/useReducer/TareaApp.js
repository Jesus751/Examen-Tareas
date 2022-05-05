import {useReducer, useEffect} from 'react';

import './style.css';
import {tareaReducer} from './tareaReducer';
import { TreaList } from './TreaList';
import { TareaAdd } from './TareaAdd';



const init = () => {
   return JSON.parse(localStorage.getItem('tareas')) || [];
}

export const TareaApp = () => {

    const [tareas, dispatch] = useReducer(tareaReducer,[],init);




    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }, [tareas]);

    const handleEliminar = (tareaid) => {
        const action = {
          type: 'eliminar',
          payload: tareaid,
        }
        dispatch(action);
    } 
    const handleCompletado = (tareaid) => {
        dispatch({
            type:'completado',
            payload: tareaid
        })
    }
    const handleAddTarea = (newTarea) => {
        dispatch({
            type: 'nueva',
            payload: newTarea
        });
    }


  return (
    <div>
        <div className='conMostrar'>
            <h1>Lista de Tareas</h1>
            <button 
                className='btn btn-success mostrar'
            >
                Mostrar Completadas
            </button>
        </div>
        <div className='col-5'>
            <TareaAdd 
                handleAddTarea={handleAddTarea}
            />
        </div>
        <div>
            <div className='col-7'>
               <TreaList
                    tareas = {tareas}
                    handleEliminar= {handleEliminar}
                    handleCompletado={handleCompletado}
               />
            </div>

        </div>

    </div>
  )
}
