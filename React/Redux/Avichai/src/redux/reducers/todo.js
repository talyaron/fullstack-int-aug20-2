const initialState = { todo: [] }

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TASK": {
            return { todo: [...state.todo, { id: action.payload.id, todoMsg: action.payload.todoMsg }] }
        }
        case "DELETE_TASK": {
            return { todo: state.todo.filter(todo => todo.id !== action.payload.id) }
        }
        default: {
            return state
        }
    }
}

export default todoReducer