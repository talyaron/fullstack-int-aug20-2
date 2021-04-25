// let idCounter = 0;
// export const addTodo = taskName=>({
//     type:"ADD_TASK",
//     payload:{
//         id: ++idCounter,
//         taskName
//     }
// })

// export const deleteTodo = id => ({
//     type: 'DELETE_TASK',
//     payload: {id}

// })

export const addNumber = number => ({
    type: 'ADD_NUMBER',
    payload: number
    
    
})
export const addOperator = operator => ({
    type: 'ADD_OPERATOR',
    operator
})

