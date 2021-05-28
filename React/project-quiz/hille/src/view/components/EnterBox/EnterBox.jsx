import './enterBox.css';
import React from 'react'
import Button from "../Button/Btn"



function EnterBox() {
    return (
        <div className="enterBox"> hello hillel lets start...
            <Button ButtonName="START" action="/quiz" />
            
        </div>
    )
}

export default EnterBox
