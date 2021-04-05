const InputForm =(props)=> {
    return(
<div>
             <form>
       <input type='text' name='textView' value={props.stringSymbols}/>
       
     </form>
    </div>
    )
    
}
export default InputForm