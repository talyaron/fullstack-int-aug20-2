const initialState = { calculation: 0 , lastCalculations: []}

const calculation = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ELM": {
            return { ...state, calculation: state.calculation === 0 ? action.payload : state.calculation + action.payload,lastCalculations: state.lastCalculations}
        }
        case "CLEAR": {
          return { ...state, calculation: 0, lastCalculations: state.lastCalculations}
        }
        case "DELET": {
        return { ...state, calculation: state.calculation.slice(0, -1),lastCalculations: state.lastCalculations}
        }
        case "EQUAL": {
          return { ...state, calculation: eval(state.calculation), lastCalculations: [...state.lastCalculations , {calculation:state.calculation,answer:eval(state.calculation)}] }
        }
        case "SET_NEW_CALC": {
          return { ...state, calculation: action.payload, lastCalculations: state.lastCalculations }
        }
        default: {
            return state
        }
    }
}
export default calculation