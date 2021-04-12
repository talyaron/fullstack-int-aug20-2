import { useDispatch, useSelector } from 'react-redux';
import { addNumber, addOperator } from './redux/actions/displayActon';




const Operators =() => {
    const operators =['/','*','-','+']

    
    let numbers = useSelector(state => state.windowReducer.number)
    const dispatch = useDispatch();
 console.log(numbers)
    let stateOperator = useSelector(state => state.windowReducer.operator)
    console.log(stateOperator)
  
    const handleClickOperator =(e) => {
       e.preventDefault()
  
      let operator = e.target.name
     
    //   console.log((numbers !='0') || ((number == '.' )&&(numbers.indexOf('.') ==-1)))
    //   console.log(numbers.indexOf('.'))
  console.log(numbers)
    if((numbers !='0')&&(stateOperator == null)){
        numbers += operator
        
    }
       
      
       else {
        numbers += ''
        operator=null
      }
        
       dispatch(addNumber(numbers));
       dispatch(addOperator(operator));
  
    }
    
    return (
        <div className='operators'>
        {operators.map(operator => 
            <button className='btn symbol' name={operator} onClick={handleClickOperator}>{operator}</button>)}
            </div>
    )
}
export default Operators