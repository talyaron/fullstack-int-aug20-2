import React from 'react';
import { useSelector } from 'react-redux';

//components
import InputName from './InputName/InputName';

const Employees = () => {

    const employees = useSelector(state => state.employeesReducer.employees);
    console.log(employees)

    return (
        <div>
            <InputName />
            {employees.map(({id, employeeName})=> <p key={id}>{employeeName}</p>)}
        </div>
    )
}


export default Employees
