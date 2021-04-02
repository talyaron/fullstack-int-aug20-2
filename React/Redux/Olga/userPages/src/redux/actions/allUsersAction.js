let idCounter = 0;
export const addUser = (UserName, urlImage)=>({
    type:"ADD_USER",
    payload:{
        id: ++idCounter,
        UserName,
        urlImage
    }
})
