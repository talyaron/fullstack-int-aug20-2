import './Calc.scss';
import Button from '../Buttons/Button'
import { useDispatch, useSelector } from 'react-redux'

const Calc = () => {

  const btns = [
    {value: 'C' ,type: "CLEAR"},
    {value: 'DEL' ,type: "DELET"},
    {value: '%' ,type: "operator"},
    {value: '/' ,type: "operator"},
    {value: '7' ,type: "number"},
    {value: '8' ,type: "number"},
    {value: '9' ,type: "number"},
    {value: '*' ,type: "operator"},
    {value: '4' ,type: "number"},
    {value: '5' ,type: "number"},
    {value: '6' ,type: "number"},
    {value: '-' ,type: "operator"},
    {value: '1' ,type: "number"},
    {value: '2' ,type: "number"},
    {value: '3' ,type: "number"},
    {value: '+' ,type: "operator"},
    {value: '' ,type: "number"},
    {value: '0' ,type: "number"},
    {value: '.' ,type: "number"},
    {value: '=' ,type: "EQUAL"},
  ]

  const calculation = useSelector((state) => state.btns.calculation);
  const lastCalculations = useSelector((state) => state.btns.lastCalculations);

  return(
    <div className='calc'>
      <div className='screen'>
        <div className='screen__calculation'>
          {/* <h3>Ans=</h3> */}
          <h1>{calculation}</h1>
        </div>
        <button>last</button>
        {
          lastCalculations.map( obg =>
            <p>{obg.calculation}={obg.answer}</p>
          )
        }
      </div>
      <div className='btnsWrapper'>
        {
          btns.map(btn => {
            return(
              <Button btnValue={btn.value} btnType={btn.type} key={btn.value}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Calc