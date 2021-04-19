import './Button.scss';
import { useDispatch } from 'react-redux'
import { addElm, action } from '../../Redux/actions/btns'


let classNames = require('classnames');

const Button = ({ btnValue, btnType, setShowLitleAns }) => {

  const dispatch = useDispatch()

  const handleClick = (event) => {

    let clickedBtnValue = event.target.value;
    let clickedBtnType = event.target.name;

    setShowLitleAns(false)

    if (clickedBtnType === 'number' || clickedBtnType === 'operator') {
      dispatch(addElm(clickedBtnValue, clickedBtnType))
    } else if (clickedBtnType === 'brackets') {
      dispatch(addElm('(', "brackets"))
    } else {
      dispatch(action(clickedBtnType))
      if (clickedBtnType === 'EQUAL') {
        setShowLitleAns(true)
      }
    }
  }

  let btnClassNameByConditions = classNames(
    { "operator": btnType === "operator" },
    { "equal": btnType === "EQUAL" },
  );

  return (
    <button onClick={handleClick} value={btnValue} name={btnType} className={btnClassNameByConditions}>{btnValue}</button>
  )
}

export default Button