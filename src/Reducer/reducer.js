export const initialState = {
  products: [],
  departments: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "All_PRODUCTS":
      return { ...state, products: action.payload };
    case "DEPARTMENTS":
      return { ...state, departments: action.payload };

    default:
      return state;
  }
};
