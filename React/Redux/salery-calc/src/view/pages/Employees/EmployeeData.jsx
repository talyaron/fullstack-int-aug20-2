import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const EmployeeData = (props) => { 
    let {id} = useParams();  
    const employees = useSelector((state) => state.employeesReducer.employees);
    const theEmployeeName = employees[0].employeeName.toUpperCase()

    return (
        <div>
          <h1>{theEmployeeName}`s Employee Data</h1>  
          <h2>please enter the the employee working hours and his salary</h2>
          <div>
             <label htmlFor="workingHours">enter the number of hours </label>
          <input type="number" name="" id="workingHours"/> 
          </div>
          <div>
          <label htmlFor="mony">enter the salary per hour </label>
          <input type="number" name="" id="mony"/>
          </div>

          

        </div>
    )
}

export default EmployeeData
