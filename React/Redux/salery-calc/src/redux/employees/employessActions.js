import {ADD_EMPLOYEE} from '../actionTypes';

export const addEmployee = employeeName => ({
    type: ADD_EMPLOYEE,
    payload: {
        employeeName,
        id:'id' + (new Date()).getTime()
    }
})