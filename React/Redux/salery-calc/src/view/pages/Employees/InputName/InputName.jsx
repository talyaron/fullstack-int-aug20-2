import React from 'react'
import { useDispatch } from 'react-redux';

//actions;
import { addEmployee } from '../../../../redux/employees/employessActions'


const InputName = props => {

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const employeeName = e.target.children.employeeName.value;

        //set to redux
        dispatch(addEmployee(employeeName))
    }
    return (
        <form className='inputType' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter emploee name' name='employeeName' />
            <button type='submit'>ADD</button>
        </form>
    )
}



export default InputName
