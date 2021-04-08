import './Button.scss'; 
import { useDispatch } from 'react-redux'
import { addElm , action } from '../../Redux/actions/btns'
import { useState } from 'react'

const Button = ({btnValue, btnType, setShowLitleAns}) => {


  // const [playSound, setPlaySound] = useState(true)
  const dispatch = useDispatch()

  const handleClick = (event) => {
    console.log(event);
    let clickedBtnValue = event.target.value;
    let clickedBtnType = event.target.name;
    console.log(clickedBtnValue,clickedBtnType) 
    setShowLitleAns(false)

    // if(playSound){
    // let audio = new Audio('https://www.myinstants.com/media/sounds/clicksoundeffect.mp3');
    // audio.play();}

    if(clickedBtnType === 'number' || clickedBtnType === 'operator' ){
      dispatch(addElm(clickedBtnValue, clickedBtnType))
    }else if( clickedBtnType ==='brackets'){
      dispatch(addElm('(', "brackets"))
    }else
    //  if(clickedBtnType === 'mute'){
    //   setPlaySound(false)
    // }else
    {
      console.log('mkmkmm');
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