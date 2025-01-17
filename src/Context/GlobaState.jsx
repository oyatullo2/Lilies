import { createContext, useState } from "react";

export const MainProvider = createContext();

export const GlobalState = ({ children }) => {
  const [closeOrder, setCloseOrder] = useState(false);
  const [closeCart, setCloseCart] = useState(false);
  const [counts, setCounts] = useState(0);
  const modeColors = localStorage.getItem("Mode")
  const [mode, setMode] = useState(modeColors)
  const [sideBarMode, setSideBarMode] = useState(true);
  return(
    <MainProvider.Provider value={{closeOrder, setCloseOrder, counts, setCounts, closeCart, setCloseCart, mode, setMode, sideBarMode, setSideBarMode}}>
      {children}
    </MainProvider.Provider>
  )
};
