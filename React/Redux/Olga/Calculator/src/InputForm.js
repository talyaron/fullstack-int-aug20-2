import { useDispatch, useSelector } from 'react-redux';
import { addNumber } from './redux/actions/displayActon';

const InputForm =(props)=> {
    let display =useSelector(state => state.windowReducer.number)
    const dispatch = useDispatch();
    console.log(display)

    const handleEqual =(e) => {
        e.preventDefault()
        console.log(eval(display))
        let result = eval(display)

        dispatch(addNumber(result));
    }


    return(
<div>
             <form onSubmit={handleEqual}>
       <input type='text' name='textView' value={display}/>
       <button>=</button>
     </form>
    </div>
    )
    
}
export default InputForm