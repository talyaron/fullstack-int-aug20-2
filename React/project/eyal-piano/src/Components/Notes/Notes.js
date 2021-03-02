import React from "react";

import { Score } from 'react-vexflow'

const Notes = () => {

  return (
    <Score
      staves={[
        ['g3', 'd4', 'e4', 'd4'],
        ['a4', 'd4', 'e4', 'd4'],
        ['a4', 'a4', 'b4', 'a4'],
        ['d4', 'e4', ['g3', 2]],
      ]}
    />
  );
};

export default Notes;
