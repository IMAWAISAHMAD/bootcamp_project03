import React, { createContext } from "react";
import {productData} from "../data/productData";
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};
