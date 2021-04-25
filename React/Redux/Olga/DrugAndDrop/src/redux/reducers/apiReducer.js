const initialState = {
    data: [],
    target:[]
}

const getDataReducer = (state=initialState, action) =>{
    switch (action.type){
        case 'GET_NAMES':{
           
            console.log(state)
            return {...state, data: action.payload}
        }
        default:{
                       return state
                 }


        case 'GET_ID':{
            let newState = {...state}
            console.log(newState)
            const id = action.payload.id
            // console.log(id)
            // let index = newState.data.findIndex(currentIndex => currentIndex.id==id)
            // newState.data.splice(index, 1)
            return {...state, id: action.payload.id}
        }

        case 'DELETE_ITEM':{
            let newState = {...state}
            if (newState.id) {
                let id = newState.id
                console.log(id)
                let index = newState.data.findIndex(currentIndex => currentIndex.id==id)
                newState.data.splice(index, 1)
            }
            
            
            return {...state, data:[...state.data]}
        }
        case 'ADD_TO_TARGET': {
            console.log(action.payload)
        }
        return {...state, target: [...state.target, action.payload]}
       
           
    }
    
}        
// const todoReducer = (state=initialState, action) =>{
//     switch (action.type){
//         case "ADD_TASK":{
//             console.log('add task', action.payload)
//             console.log(state)
//             return {...state, todo:[...state.todo, {id:action.payload.id, taskName:action.payload.taskName}]}
            
//         }
//         case "DELETE_TASK":{
//             const id = action.payload.id
//             console.log(id)
//            let newState = {...state}
//            console.log(newState.todo)
//            let index = newState.todo.findIndex(currentIndex => currentIndex.id==id)
//            console.log(index)
//            if (index > -1) {
//                newState.todo.splice(index, 1)
//            }

//             return {...state, todo:[...state.todo]}
//         }
//         default:{
//             return state
//         }
//     }
// }

// export default todoReducer


export default getDataReducer