const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      const indexToRemove = state.findIndex((item) => item.id === action.payload);
      if (indexToRemove !== -1) {
        return state.filter((_, index) => index !== indexToRemove);
      }
      return state;

    case "DELETE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;