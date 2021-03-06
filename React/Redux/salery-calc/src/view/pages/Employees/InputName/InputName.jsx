import React from 'react'
import { useDispatch } from 'react-redux';

//actions;
import { addEmployee } from '../../../../redux/employees/employessActions'
/* import { addEmployee } from '@redux/employees/employessActions' */
/* ../../../../redux */

const InputName = props => {

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const employeeName = e.target.children.employeeName.value;

        //set to redux
        dispatch(addEmployee(employeeName))
    }
    return (
        <form className='inputType' onSubmit={handleSubmit} style={{"display": "flex",flexDirection:"column", margin:"0 10% 0 10%"}}>
            <label htmlFor="employeeName">Enter Employee Name</label>
            <input type='text' placeholder='Enter employee name' name='employeeName' id='employeeName' />
            <button type='submit'>ADD</button>
        </form>
    )
}



export default InputName
