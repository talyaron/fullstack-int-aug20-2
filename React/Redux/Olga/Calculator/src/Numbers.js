

const Numbers =(props) => {
    const numbers =[7,8,9,4,5,6,1,2,3,0,'.']

    return (
        <div className='numbers_wrap'>
        {numbers.map(num => 
            <button className='btn num' key={num} name={num} onClick={props.onClick}>{num}</button>)}
            </div>
    )
}
export default Numbers