const initialState = { joke : '' }

const words = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_WORDS": {
      console.log({state});
      console.log({state});
      return { ...state,  joke : action.payload  }
    }
    default: {
      return state
    }
  }
}
export default words