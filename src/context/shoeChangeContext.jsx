import React from "react";
import { createContext, useState } from "react";
export const ShoeNumContext = createContext();
export default function ShoeChangeContext({ children }) {
  let [currentShoe, setCurrentShoe] = useState(1);
  return (
    <ShoeNumContext.Provider value={{currentShoe, setCurrentShoe }}>
      {children}
    </ShoeNumContext.Provider>
  );
}
