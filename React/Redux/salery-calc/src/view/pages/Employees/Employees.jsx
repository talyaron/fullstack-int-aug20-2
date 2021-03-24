import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components


//actions;
import {DeleteEmployee } from '../../../redux/employees/employessActions'

const Employees = () => {
  const employees = useSelector((state) => state.employeesReducer.employees);
  const dispatch = useDispatch();
  /* console.log(employees); */
  

  function handleDelete(e) {  
const id = e.target.parentElement.childNodes[0].id;
      //set to redux
      dispatch(DeleteEmployee(id))
  }

  return (
    
    <>
     {employees.map(({ index,id, employeeName }) => (
          <li>
        <Link to={`/calc-salary/${id}`} id={id} key={index}>
          {employeeName}
        </Link>
        <span to={`/calc-salary/id:${id}`} onClick={handleDelete}> Delete</span>
        </li>
      ))}
    
     </> 
    
   
  );
};

export default Employees;
