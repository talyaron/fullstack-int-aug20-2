// let idCounter = 0;
// export const addTodo = taskName=>({
//     type:"ADD_TASK",
//     payload:{
//         id: ++idCounter,
//         taskName
//     }
// })

export const apiData = (data) => ({
    
    type: 'GET_NAMES',
    payload: data,
   

})

export const getId = id => ({
    type: 'GET_ID',
    payload: {id}

})

export const deleteFromData = () => ({
    type: 'DELETE_ITEM',
   

})

export const addToTarget = target => ({
    type: 'ADD_TO_TARGET',
    payload: target
})




export const getData = (data) => {
   
 return (dispatch) =>{
   
    fetch('https://rickandmortyapi.com/api/character/')
    .then(r => r.json())
    .then(data => {
       let newData = data.results
       console.log(newData)

        dispatch(apiData(newData))
    }
        )
}

  
}