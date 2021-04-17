const initialState = { Users: [] }
const Users = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER": {
            return { ...state, Users: [...state.Users, action.payload] }
        }
        default: {
            return state
        }
    }
}
export default Users