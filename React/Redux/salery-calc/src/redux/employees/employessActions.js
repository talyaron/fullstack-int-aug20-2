import {ADD_EMPLOYEE} from '../actionTypes';
import {DELETE_EMPLOYEE} from '../actionTypes';
import {SELECTED_EMPLOYEE} from '../actionTypes';

export const addEmployee = employeeName => ({
    type: ADD_EMPLOYEE,
    payload: {
        employeeName,
        id:'id' + (new Date()).getTime()
    }
})
export const DeleteEmployee = (id) => ({
    
        type: DELETE_EMPLOYEE,
        payload: id
     })
    /* type: DELETE_EMPLOYEE,
    payload: {
        employeeName,
        id:'id' + (new Date()).getTime()
    } */

/* export const addEmployee = employeeName => ({
    type: ADD_EMPLOYEE,
    payload: {
        employeeName,
        id:'id' + (new Date()).getTime()
    }
}) */