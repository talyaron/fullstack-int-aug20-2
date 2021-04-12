const initialState = []

const getDataReducer = (state=initialState, action) =>{
    switch (action.type){
        case 'GET_NAMES':{
           
            console.log(state)
            return {...state, data: action.payload}
        }
        default:{
                       return state
                 }
    }
}        
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

//{...state, number: action.payload}


export default getDataReducer