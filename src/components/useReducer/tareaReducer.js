

export const tareaReducer = (state= [], action) => {

    switch (action.type) {
        case 'nueva':
            return [...state, action.payload];

        case 'eliminar':
            return state.filter(tarea => tarea.id !== action.payload);

        
        case 'completado':
            return state.map(tarea =>
                (tarea.id === action.payload)
                ? {... tarea, done: !tarea.done}
                : tarea
            );
        default:
            return state;
    }

}