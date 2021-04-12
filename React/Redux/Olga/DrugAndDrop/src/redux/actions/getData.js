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
    payload: data

})

export const getData = (data) => {
   
 return (dispatch) =>{
   
    fetch('https://rickandmortyapi.com/api/character/')
    .then(r => r.json())
    .then(data => {
       let newData = data.results
       console.log(newData)
    //   let names = newData.map(el => el.name)
    //   let id = newData.map(el => el.id)
    //   console.log(names)
    //   console.log(id)
        dispatch(apiData(newData))
    }
        )
}

  
}