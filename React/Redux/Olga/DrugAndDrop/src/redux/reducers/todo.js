// const initialState = {todo:[]}

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