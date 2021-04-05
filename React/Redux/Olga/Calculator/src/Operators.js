const Operators =(props) => {
    const operators =['-','+','/','*']
    return (
        <div>
        {operators.map(item => 
            <button name={item} onClick={props.onClick}>{item}</button>)}
            </div>
    )
}
export default Operators