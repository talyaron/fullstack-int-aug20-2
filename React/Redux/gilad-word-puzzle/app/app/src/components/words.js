import { findAllByAltText, getDefaultNormalizer } from '@testing-library/dom';
import React, { useImperativeHandle, useState } from 'react';
import { wordsArr } from './wordsArray'
import ReactDOM from 'react-dom';
// import Draggable from 'react-draggable';





function Words() {
    const [randomWord, setRandomWord] = useState('Drag Me')





    // function getRandomWord(){

    //     setRandomWord(wordsArr[Math.floor(Math.random()*107551)])
    //     return(randomWord)
    // }


    return (
   <div>
       
   </div>
    )
}
export default Words