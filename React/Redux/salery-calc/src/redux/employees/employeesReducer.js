import { ADD_EMPLOYEE } from '../actionTypes';

const initialState = { employees: [] }

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE: {
            console.log(ADD_EMPLOYEE)
            return { 
                ...state, 
                employees: [
                    ...state.employees, action.payload] }
        }

        default: {
            return state
        }
    }
}

export default employeesReducer