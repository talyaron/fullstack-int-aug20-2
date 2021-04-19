export const addElm = (value) => ({
  type: 'ADD_ELM',
  payload: value 
})

export const action = (type) => ({
  type
})

export const switchDisplay = (newChosenCalc) => ({
  type: 'SET_NEW_CALC',
  payload: newChosenCalc 
})





