import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

//actions;
import { addEmployee } from '../../../../redux/employees/employessActions'


const CalcSalery = props => {
let {id} = useParams();
 
/*     const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const employeeName = e.target.children.employeeName.value;

        //set to redux
        dispatch(addEmployee(employeeName))
    } */
    return (
        {console.log(id)}
        <form className='inputType' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter emploee name' name='employeeName' />
            <button type='submit'>ADD</button>
        </form>
    )
}



export default CalcSalery
