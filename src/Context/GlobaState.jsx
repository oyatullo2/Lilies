import { createContext, useState } from "react";

export const MainProvider = createContext();

export const GlobalState = ({ children }) => {
  const [closeOrder, setCloseOrder] = useState(false);
  const [closeCart, setCloseCart] = useState(false);
  const [counts, setCounts] = useState(0);
  return(
    <MainProvider.Provider value={{closeOrder, setCloseOrder, counts, setCounts, closeCart, setCloseCart}}>
      {children}
    </MainProvider.Provider>
  )
};
