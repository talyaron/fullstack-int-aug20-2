import React from 'react';
import { useSelector } from 'react-redux';
import {
    Link
  } from "react-router-dom";
  

//components
import InputName from './InputName/InputName';

const Employees = () => {

    const employees = useSelector(state => state.employeesReducer.employees);
    console.log(employees)
    
    

    return (
        <div>
            <h1>useless stuff to help us understand Redux</h1>

            <InputName />            
            {employees.map(({id, employeeName,salery})=><p key={id}><Link to={id}>{employeeName}</Link> {salery?salery:''} </p>)}
        </div>
    )
}


export default Employees
