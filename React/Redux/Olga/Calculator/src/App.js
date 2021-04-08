import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, addOperator, addToDisplay } from './redux/actions/displayActon'
import Numbers from './Numbers';
import Operators from './Operators';
import InputForm from './InputForm';
import ClearBtn from './ClearBtn';
import DeleteBtn from './DeleteBtn';




function App() {

  let numbers = useSelector(state => state.windowReducer.number)
  let operator =useSelector(state => state.windowReducer.operator)
  let state = useSelector(state => console.log(state))

  const dispatch = useDispatch();
console.log(numbers)
console.log(operator)
  

  const handleOnClickNum =(e) => {
     e.preventDefault()

    let number = e.target.name
    console.log((numbers !='0') || ((number == '.' )&&(numbers.indexOf('.') ==-1)))
    console.log(numbers.indexOf('.'))
    let indOperator = numbers.indexOf(operator)
    // let num2 = numbers.splice(indOperator)
    // console.log(num2)
    console.log(indOperator)
    if((numbers !='0') && ((number == '.' )&&(((operator==null)) && numbers.indexOf('.') ==-1)) || (((number == '.' )  && (numbers.slice(indOperator)).indexOf('.') ==-1))){
      numbers += number
      
    }else if((numbers =='0') && ((number == '.' ))){
      numbers += number
      
    }
      
    
    
    else if((numbers !='0') && ((number != '.' ))){
      numbers += number
      
    }
      else if(
      
        (number == '.') && ((numbers.indexOf('.') !=-1))){
           numbers += ''
     
        }
    
     else {
      numbers = number
    }

     dispatch(addNumber(numbers));
     
  
  }



  
  



  // const stringSymbols = symbols.map(sym => sym.symbol).join('')
  // console.log(stringSymbols)



  return (
   <div>


     {/* <InputForm stringSymbols={stringSymbols}/> */}
     <InputForm/>
     <Numbers  onClick={(e) => handleOnClickNum(e)}/>
     <Operators onClick={(e) => handleOnClickNum(e)}/>
     <ClearBtn/>
     <DeleteBtn/>
   </div>
  )
}
export default App;
