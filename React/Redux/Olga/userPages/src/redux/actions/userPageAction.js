let idCounter = 0
export const userPage = (userId, userName, urlImage, urlPhoto)=>({
    
    type:"ADD_PHOTO",
    payload:{
        userId,
        userName,
        urlImage,
        photoId: ++idCounter,
        urlPhoto
        

    }
    
})


