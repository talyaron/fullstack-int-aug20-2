import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addSalery } from '../../../redux/employees/employessActions'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
 

const Calc = props => {
    const dispatch = useDispatch();
    let { id } = useParams();
    const employees = useSelector(state => state.employeesReducer.employees.find(element=>element.id===id));
    console.log(employees)
     const handleSubmit = e=>{
         e.preventDefault()
         const payPerHour = e.target.children.payPerHour.value
         const hoursWorked = e.target.children.hoursWorked.value
         const salery = hoursWorked* payPerHour
         console.log(salery)
         dispatch(addSalery(salery,id))
     }
    
    
     
    
    return (
        <div>
            <h1>{employees.employeeName}</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='Payment Per Hour' name='payPerHour' type="number"/>
                <input placeholder='Hours Worked' name='hoursWorked' type="number"/>
                <button>submit</button>
            </form>
            <button id='return'><Link to='/'>back</Link></button>
        </div>
    )
}


export default Calc
