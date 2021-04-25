let idCounter = 0;
export const addUser = (userName, urlImage)=>({
    type:"ADD_USER",
    payload:{
        id: ++idCounter,
        userName,
        urlImage
    }
})
