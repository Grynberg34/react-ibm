import plants from "../../plants.json";

const initialState = plants;

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return state;
    default:
      return state;
  }
};

export default productsReducer;