const initialState = {
  calculation: 0,
  lastCalculations: []
}

const calculation = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ELM": {
      let condition = state.lastCalculations[state.lastCalculations.length - 1] || {
        answer: 0
      };
      return {
        ...state,
        calculation: 
          (state.calculation === 0 || state.calculation === condition.answer) && !isNaN(parseInt(action.payload)) ?
          action.payload : 
          state.calculation + action.payload,
        lastCalculations: state.lastCalculations
      }
    }
    case "CLEAR": {
      return {
        ...state,
        calculation: 0,
        lastCalculations: state.lastCalculations
      }
    }
    case "DELETE": {
      return {
        ...state,
        calculation: state.calculation.length >= 2 ? state.calculation.slice(0, -1) : 0,
        lastCalculations: state.lastCalculations
      }
    }
    case "EQUAL": {
      try {
        return {
          ...state,
          calculation: eval(state.calculation),
          lastCalculations: [...state.lastCalculations, {
            calculation: state.calculation,
            answer: eval(state.calculation)
          }]
        }
      } catch (error) {
        return {
          ...state,
          calculation: 'ERR',
          lastCalculations: [...state.lastCalculations, {
            calculation: state.calculation,
            answer: 'ERR'
          }]
        }
      }

    }
    case "SET_NEW_CALC": {
      return {
        ...state,
        calculation: action.payload,
        lastCalculations: ''
      }
    }
    default: {
      return state
    }
  }
}
export default calculation