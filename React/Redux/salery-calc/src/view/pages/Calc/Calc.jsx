import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
 

const Calc = props => {
    let { id } = useParams();
    const employees = useSelector(state => state.employeesReducer.employees.find(element=>element.id===id));
    console.log(employees)
     const handleSubmit = e=>{
         e.preventDefault()
         const payPerHour = e.target.children.payPerHour.value
         const hoursWorked = e.target.children.hoursWorked.value
         const salery = hoursWorked* payPerHour
     }
    
    
  
    
    return (
        <div>
            <h1>{employees.employeeName}</h1>
            <form onSubmit={handleSubmit}>
                <input name='payPerHour' type="number"/>
                <input name='hoursWorked' type="number"/>
                <button>submit</button>
            </form>
        </div>
    )
}


export default Calc
