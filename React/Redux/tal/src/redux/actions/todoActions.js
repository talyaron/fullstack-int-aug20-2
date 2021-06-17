let idCounter = 0;
export const addTodo = taskName=>({
    type:"ADD_TASK",
    payload:{
        id: ++idCounter,
        taskName
    }
})

export const deleteTodo = taskId =>({
    type:"DELETE_TASK",
    payload:taskId
})