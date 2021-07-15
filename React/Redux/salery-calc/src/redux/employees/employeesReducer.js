import { findAllInRenderedTree } from 'react-dom/test-utils';
import { ADD_EMPLOYEE } from '../actionTypes';
import { ADD_SALERY } from '../actionTypes';

const initialState = { employees: [] }

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE: {
            console.log(ADD_EMPLOYEE)
            return { ...state, employees: [...state.employees, action.payload] }
        }
        case ADD_SALERY: {
            console.log(ADD_SALERY)
             let employee =state.employees.find(employee=>employee.id === action.payload.id)
             console.log(employee)
             console.log(state.employees)
             
             state.employees.forEach(element => {
                 if(element.id==action.payload.id){
                     
                     element.salery= action.payload.salery
                 }
                 
             });
             console.log(state.employees)
                 
            return { ...state, employees: [...state.employees] }
        }

        default: {
            return state
        }
    }
}

export default employeesReducer