import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TareaAdd = ({handleAddTarea}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(description.trim().length <= 1){
            return;
        }
        
        const newTarea = {
            id: new Date().getTime(),
            descripcion: description,
            done: false
        };

        handleAddTarea(newTarea);
        reset();
    }

  return (
    <>
        <h4>Agreagar Tarea</h4>
        <hr/>

        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='form-control'
                name='description'
                placeholder='Nueva tarea'
                autoComplete='off'
                onChange={handleInputChange}
                value={description}
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1 btn-block'
                        
            >
                Agregar
            </button>
                  
        </form>
    </>
  )
}
