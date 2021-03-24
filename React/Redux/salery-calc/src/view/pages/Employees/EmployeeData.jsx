import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const EmployeeData = (props) => { 
    let {id} = useParams();  
    const employees = useSelector((state) => state.employeesReducer.employees);
    return (
        <div>
          <h1>test</h1>  
        </div>
    )
}

export default EmployeeData
