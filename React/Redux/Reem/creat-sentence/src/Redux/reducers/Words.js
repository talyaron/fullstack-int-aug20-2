const initialState = { calculation: 0 , lastCalculations: []}

const calculation = (state = initialState, action) => {
    switch (action.type) {

        case "SET_NEW_CALC": {
          return { ...state, calculation: action.payload, lastCalculations: state.lastCalculations }
        }
        default: {
            return state
        }
    }
}
export default calculation