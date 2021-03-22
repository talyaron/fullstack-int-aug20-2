import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

//components
import InputName from './InputName/InputName';

const Employees = () => {

    const employees = useSelector(state => state.employeesReducer.employees);
    console.log(employees)
    

    return (
        <div>
            <InputName />
            {employees.map(({id, employeeName})=><p key={id}><Link to={id}>{employeeName}</Link></p>)}
        </div>
    )
}


export default Employees
