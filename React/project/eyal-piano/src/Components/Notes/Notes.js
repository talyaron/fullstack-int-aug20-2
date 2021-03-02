import React from "react";
import "./notes.css";

import { Score } from 'react-vexflow'

const Notes = () => {
  
  return (
  <>
  <Score height= '100%' 
        width= '1600'
        
      staves={[
        ['g3', 'd4', 'e4', 'd4'],
        ['a4', 'd4', 'e4', 'd4'],
        ['a4', 'a4', 'b4', 'a4'],
        ['d4', 'e4', ['g3', 2]],
      ]}
    />
  </>

  );
};

export default Notes;
