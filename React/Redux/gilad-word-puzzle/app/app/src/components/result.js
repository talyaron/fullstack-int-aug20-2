import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useState } from 'react';
import { DragDropContext,Droppable } from 'react-beautiful-dnd';

function Result(){
    return(
        <div></div>
        // <DragDropContext>
        //     <Droppable droppableId='droppedWords'>
        //         {(provided)=>(  <div>
        //     <h1 className='droppedWords'{...provided.droppableProps} ref={provided.innerRef}>Drop Zone
        //     </h1>
        //     </div>)}
      
        //     </Droppable>
        //     </DragDropContext>
    )
}
export default Result