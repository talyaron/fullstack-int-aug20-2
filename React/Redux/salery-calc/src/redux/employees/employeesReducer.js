import { ADD_EMPLOYEE } from '../actionTypes';
import {DELETE_EMPLOYEE} from '../actionTypes';
import {SELECTED_EMPLOYEE} from '../actionTypes';

const initialState = { employees: [] }

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE: {
         //   console.log(ADD_EMPLOYEE)
            return { ...state, employees: [...state.employees, action.payload] }
        }
        case DELETE_EMPLOYEE: {           
            return { ...state, employees: state.employees.filter(i => i.id !== action.payload) }
        }
        case SELECTED_EMPLOYEE: {           
            return { ...state, employees: state.employees.filter(i => i.id === action.payload) }
        }

        default: {
            return state
        }
    }
}

export default employeesReducer