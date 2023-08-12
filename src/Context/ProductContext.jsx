import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reducer";
import { inventoryData } from "../data/data";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "All_PRODUCTS", payload: inventoryData });
  }, []);

  console.log(state);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
