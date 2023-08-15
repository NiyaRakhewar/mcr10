export const initialState = {
  products: [],
  departments: [],
  currentDept: "All Departments",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "All_PRODUCTS":
      return { ...state, products: action.payload };
    case "DEPARTMENTS":
      return { ...state, departments: action.payload };

    case "CURRENT_DEPT":
      return { ...state, currentDept: action.payload };

    case "NEW_PRODUCT":
      return { ...state, products: [action.payload, ...state.products] };

    default:
      return state;
  }
};
