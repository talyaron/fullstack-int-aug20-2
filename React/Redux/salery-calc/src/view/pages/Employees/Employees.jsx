import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
//components
import InputName from './InputName/InputName';

const Employees = () => {

    const employees = useSelector(state => state.employeesReducer.employees);
    console.log(employees)

    return (
        <div>
            <InputName />
            {employees.map(({id, employeeName})=> <Link to = {`/Calc-salery/${id}` } key={id}>{employeeName}</Link>)}
        </div>
    )
}


export default Employees
