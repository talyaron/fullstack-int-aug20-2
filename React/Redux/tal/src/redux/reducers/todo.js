const initialState = {todo:[]}

const todoReducer = (state=initialState, action) =>{
    switch (action.type){
        case "ADD_TASK":{
            console.log('add task', action.payload)
            return {...state, todo:[...state.todo, {id:action.payload.id, taskName:action.payload.taskName}]}
        }
        case "DELETE_TASK":{
            return state
        }
        default:{
            return state
        }
    }
}

export default todoReducer




