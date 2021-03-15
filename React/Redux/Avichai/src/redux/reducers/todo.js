const initialState = { todo: [] }

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            return { ...state, todo: [...state.todo, { id: action.payload.id, todoMsg: action.payload.todoMsg }] }
        }
        case "DELETE_TASK": {
            return state
        }
        default: {
            return state
        }
    }
}

export default todoReducer