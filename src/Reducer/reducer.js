export const initialState = {
  products: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "All_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
