import React from 'react'




const InputItems = () => {

    function handleSubmit(e) {
        e.preventDefault();
    
        const newItem = e.target.children.newItem.value;
        const time = e.target.children.time.value;
    
        console.log(newItem, time);

        
        // e.target.reset();
    
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type='text' name='newItem'></input>
          <input type='time' name='time'></input>
          <button>add</button>
        </form>
    </div>
)
}

export default InputItems;