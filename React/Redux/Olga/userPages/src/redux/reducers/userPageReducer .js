const initialState = {allPhoto:[]}

const allUserPhotoReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_PHOTO':{
            return {...state, allPhoto: [...state.allPhoto, 
                {userId: action.payload.userId, userName: action.payload.userName, urlImage: action.payload.urlImage, photoId: action.payload.photoId, urlPhoto: action.payload.urlPhoto}]}
        }
        default: {
            return state
        }
    }
}

export default allUserPhotoReducer


