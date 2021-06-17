const initialState = {todo:[]}

const todoReducer = (state=initialState, action) =>{
    switch (action.type){
        case "ADD_TASK":{
            console.log('add task', action.payload)
            return {...state, todo:[...state.todo, {id:action.payload.id, taskName:action.payload.taskName}]}
        }
        case "DELETE_TASK":{
            //find task by id and remove
            const newTododList = state.todo.filter(todo=>todo.id !== action.payload);
            return {...state, todo:newTododList};
        }
        default:{
            return state
        }
    }
}

export default todoReducer