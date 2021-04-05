const initialState = { Images: [] }
const Images = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_IMG": {
            return { ...state, Images: [...state.Images, action.payload] }
        }
        default: {
            return state
        }
    }
}
export default Images