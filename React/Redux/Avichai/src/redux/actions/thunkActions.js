let idCounter = 0

export const addThunk = (msg) => ({
    type: "ADD_THUNK",
    payload: {
        msg,
        id: ++idCounter
    }
})
export const deleteThunk = (id) => ({
    type: "DELETE_THUNK",
    payload: {
        id
    }
})

