import { createContext } from "react";
import { food_list } from "../assets/assets";

// Context banana hoga yaha pe
export const StoreContext = createContext(null);

// Provider Component
const StoreContextProvider = (props) => {

  // Ye wo data hoga jo globally share hoga
  const contextValue = {
    food_list
  };

  // Provider ko return karna
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;