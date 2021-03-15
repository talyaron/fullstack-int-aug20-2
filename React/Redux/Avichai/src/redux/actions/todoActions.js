let idCounter = 0
export const addTodo = (todoMsg) => ({
    type: "ADD_TASK",
    payload: {
        id: ++idCounter,
        todoMsg
    }
})