import './Button.scss'; 
import { useDispatch } from 'react-redux'
import { addElm , action } from '../../Redux/actions/btns'

const Button = ({btnValue, btnType, setShowLitleAns}) => {

  const dispatch = useDispatch()

  const handleClick = (event) => {
    let clickedBtnValue = event.target.value;
    let clickedBtnType = event.target.name;
    console.log(clickedBtnValue,clickedBtnType) 
    setShowLitleAns(false)

    if(clickedBtnType === 'number' || clickedBtnType === 'operator' ){
      console.log("'number' || 'operator'");
      dispatch(addElm(clickedBtnValue, clickedBtnType))
    }else{
      dispatch(action(clickedBtnValue, clickedBtnType))
      if(clickedBtnType === 'EQUAL'){
        setShowLitleAns(true)
      }
    }
  }

  return(
    <button onClick={handleClick} value={btnValue} name={btnType} className={btnType==="operator"? "operator": btnType==="EQUAL"? "equal":null}>{btnValue}</button>
  )
}

export default Button