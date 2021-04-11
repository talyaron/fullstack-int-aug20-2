// let idCounter = 0;
// export const addTodo = taskName=>({
//     type:"ADD_TASK",
//     payload:{
//         id: ++idCounter,
//         taskName
//     }
// })

export const pokemonsData = (data) => ({
    type: 'GET_WORDS',
    payload: data

})

export const getPokemonsData = (data) => {
   
 return (dispatch) =>{

    fetch('https://rickandmortyapi.com/api/character/')
    .then(r => r.json())
    .then(data => {
        console.log(data.results)
        dispatch(pokemonsData(data.results))
    }
        )
}

  
}