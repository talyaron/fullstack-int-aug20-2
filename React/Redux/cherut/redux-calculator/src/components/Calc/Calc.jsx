import './Calc.scss';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { switchDisplay } from '../../Redux/actions/btns'

//components
import Button from '../Buttons/Button'

const Calc = () => {

  const dispatch = useDispatch();
  const [showLastCalculations, setShowLastCalculations] = useState(false);
  const [showLitleAns, setShowLitleAns] = useState(false);
  const calculation = useSelector((state) => state.btns.calculation);
  const lastCalculations = useSelector((state) => state.btns.lastCalculations);

  const btns = [
    { value: 'C', type: "CLEAR" },
    { value: "DEL", type: "DELETE" },
    { value: '(', type: "number" },
    { value: ')', type: "number" },
    { value: '/', type: "operator" },
    { value: '7', type: "number" },
    { value: '8', type: "number" },
    { value: '9', type: "number" },
    { value: '*', type: "operator" },
    { value: '4', type: "number" },
    { value: '5', type: "number" },
    { value: '6', type: "number" },
    { value: '-', type: "operator" },
    { value: '1', type: "number" },
    { value: '2', type: "number" },
    { value: '3', type: "number" },
    { value: '+', type: "operator" },
    { value: '.', type: "number" },
    { value: '0', type: "number" },
    { value: '=', type: "EQUAL" },

  ]

  const showLastCalc = () => {
    setShowLastCalculations(!showLastCalculations)
  }

  const newChosenCalc = (event) => {
    let newCalc = event.target.innerHTML;
    dispatch(switchDisplay(newCalc))
    setShowLastCalculations(false)
  }

  return (
    <>
      <div className='calc'>
        <div className='screen'>
          <div className='back' onClick={showLastCalc}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>
            <div className={showLastCalculations ? 'lastCalcs show' : 'lastCalcs'} >
              {
                (lastCalculations.length === 0) ?
                  <p>Your calculations and results are displayed here for reuse</p> :
                  lastCalculations.map((obg, index) =>
                    <div key={index} className='oneOfLastCalc' >
                      <span className='option' onClick={newChosenCalc} >{obg.calculation}</span>
               =
              <span className='option' onClick={newChosenCalc}>{obg.answer}</span>
                    </div>
                  )
              }
            </div>
          </div>
          <div className='screen__calculation'>
            {
              lastCalculations.length > 0 ?
                showLitleAns ?
                  <h3>{lastCalculations[lastCalculations.length - 1].calculation}=</h3>
                  :
                  <h3>Ans={lastCalculations[lastCalculations.length - 1].answer}</h3>
                : null
            }
            <h1>{calculation}</h1>
          </div>
        </div>
        <div className='btnsWrapper'>
          {
            btns.map(btn => {
              return (
                <Button id={btn.type} btnValue={btn.value} btnType={btn.type} key={btn.value} setShowLitleAns={setShowLitleAns} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Calc
