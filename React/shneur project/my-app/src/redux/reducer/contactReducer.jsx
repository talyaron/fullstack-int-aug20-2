const initialState = [
  { id: 0, name: "shneur", number: 533386770, email: "770abhtur1@gmail.com" },
  { id: 1, name: "chasi", number: 547176864, email: "chasi770770@gmail.com" },
];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
      case "UPDATE_CONTACT":
          const updateState = state.map(contact=> contact.id === action.payload.id? action.payload:contact)

        state = updateState;
        return state
        case "DEDETE_CONTECT":
            const filteredContacts = state.filter(contact=> contact.id !== action.payload && contact)
            state = filteredContacts;
            return state;

    default:
      return state;
  }
};
export default contactReducer;
