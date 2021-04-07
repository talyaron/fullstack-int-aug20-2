export const addElm = (value, type) => ({
  type: 'ADD_ELM',
  payload: value 
})

export const action = (value, type) => ({
  type
})

export const switchDisplay = (newChosenCalc) => ({
  type: 'SET_NEW_CALC',
  payload: newChosenCalc 
})





