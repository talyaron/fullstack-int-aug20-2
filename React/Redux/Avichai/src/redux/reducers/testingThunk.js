

const initialState = { thunk: [] }


const testingThunk = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_THUNK": {
            return { thunk: [...state.thunk, { id: action.payload.id, msg: action.payload.msg }] }
        }
        case 'DELETE_THUNK': {
            console.log(action.payload.id)
            return { thunk: state.thunk.filter(thunk => thunk.id !== action.payload.id) }
        }
        case "thunkTesting": {
            console.log('dsa')
            return { thunk: [action.payload] }
        }
        default: {
            return state
        }
    }
}

export default testingThunk