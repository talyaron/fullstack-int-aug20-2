import React from "react";
import {useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"; 

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components


//actions;
import {DeleteEmployee } from '../../../redux/employees/employessActions'

const Employees = () => {
  const history = useHistory();
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
           
        <Link to={`/EmployeeData/${id}`} id={id} key={index}>
          {employeeName}
        </Link>
        <span to={`/EmployeeData/id:${id}`} onClick={handleDelete}> Delete</span>
        </li>
      ))}
    
     </> 
    
   
  );
};

export default Employees;

/* listRestaurant.map((elm) => (
           <div className="restaurant-grid"
              onClick={() => history.push(`/RestaurantMenu/${elm.Name}`)}
              key={elm.Name}>
 */