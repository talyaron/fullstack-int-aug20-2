

const Numbers =(props) => {
    const numbers =[0,1,2,3,4,5,6,7,8,9,'.']

    return (
        <div>
        {numbers.map(num => 
            <button key={num} name={num} onClick={props.onClick}>{num}</button>)}
            </div>
    )
}
export default Numbers