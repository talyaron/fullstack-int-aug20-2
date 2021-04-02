const initialState = {allUsers:[]}

const allUsersReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':{
            return {...state, allUsers: [...state.allUsers, {id: action.payload.id, userName: action.payload.userName, urlImage: action.payload.urlImage}]}
        }
    }
}

export default allUsersReducer