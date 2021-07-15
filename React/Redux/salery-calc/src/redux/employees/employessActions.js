import {ADD_EMPLOYEE,ADD_SALERY} from '../actionTypes';

export const addEmployee = employeeName => ({
    type: ADD_EMPLOYEE,
    payload: {
        employeeName,
        id:'id' + (new Date()).getTime(),
       
    }
})

export const addSalery = (salery,id) =>   ({
    type: ADD_SALERY,
    payload: {
        salery: salery,
        id:id
    }
})