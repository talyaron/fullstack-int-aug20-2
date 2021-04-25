const initialState = {number:'0', operator: null}

const windowReducer = (state={...initialState}, action) => {
    switch (action.type){
        case 'ADD_NUMBER': {
            
            return {...state, number: action.payload}
        }
        default:{
                     return state
        }

        case 'ADD_OPERATOR': {
            return {...state, operator: action.operator}
        }

      
    }
}
export default windowReducer


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