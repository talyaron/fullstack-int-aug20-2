const initialState = { Comments: [] }
const Comments = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_Comment": {
            return { ...state, Comments: [...state.Comments, action.payload] }
        }
        default: {
            return state
        }
    }
}
export default Comments