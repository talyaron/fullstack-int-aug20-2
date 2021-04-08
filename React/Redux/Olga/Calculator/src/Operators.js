import { useDispatch, useSelector } from 'react-redux';
import { addNumber, addOperator } from './redux/actions/displayActon';




const Operators =(props) => {
    const operators =['-','+','/','*']

    
    let numbers = useSelector(state => state.windowReducer.number)
    const dispatch = useDispatch();
 

  
    const handleClickOperator =(e) => {
       e.preventDefault()
  
      let operator = e.target.name
     
    //   console.log((numbers !='0') || ((number == '.' )&&(numbers.indexOf('.') ==-1)))
    //   console.log(numbers.indexOf('.'))
  
    if((numbers !='0')&&(numbers.indexOf('*') ==-1 && numbers.indexOf('-') ==-1 && numbers.indexOf('+') ==-1) && numbers.indexOf('/') ==-1){
        numbers += operator
        
    }
       
      
       else {
        numbers += ''
        operator=''
      }
        
       dispatch(addNumber(numbers));
       dispatch(addOperator(operator));
  
    }
    
    return (
        <div>
        {operators.map(operator => 
            <button name={operator} onClick={handleClickOperator}>{operator}</button>)}
            </div>
    )
}
export default Operators