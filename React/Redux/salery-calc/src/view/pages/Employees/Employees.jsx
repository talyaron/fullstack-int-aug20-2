import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

import { BrowserRouter as  Link } from "react-router-dom";

//components
import InputName from "./InputName/InputName"; /* /view/pages/Employees */

//actions;
import {DeleteEmployee } from '../../../redux/employees/employessActions'
import {CurrentEmploy } from '../../../redux/employees/employessActions'

const Employees = () => {

  const employees = useSelector((state) => state.employeesReducer.employees);
  const dispatch = useDispatch();
  /* console.log(employees); */
  

  const handleDelete = (e) => {  
const id = e.target.parentElement.childNodes[0].id;
      //set to redux
      dispatch(DeleteEmployee(id))
  }

const setCurrentEmploy = (e) => {
  const id = e.target.parentElement.childNodes[0].id;
  dispatch(CurrentEmploy(id))
}

  return (
    
    <>
     <InputName />
      <ul>
     {employees.map(({ index,id, employeeName }) => (
          <li style={{marginTop:"5px", marginBottom:"5px"}}>
           
        <Link to={`/EmployeeData/`} onClick={setCurrentEmploy} id={id} key={index}>
          {employeeName}
        </Link>
        
       <span   onClick={handleDelete} style={{marginLeft:"9px"}} >
         <FaTrashAlt color="red" title="Delete"   onClick={handleDelete} />
       </span>
        
        </li>
      ))}
    </ul>
     </> 
    
   
  );
};

export default Employees;

/* listRestaurant.map((elm) => (
           <div className="restaurant-grid"
              onClick={() => history.push(`/RestaurantMenu/${elm.Name}`)}
              key={elm.Name}>
 */