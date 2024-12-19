import React, { createContext, useContext } from "react";
import { MyAppProviderProps, MyAppContext } from "../interfaces";

const MyContext = createContext<MyAppContext | undefined>(undefined);

const MyAppContextProvider: React.FC<MyAppProviderProps> = ({ children }) => {
  const userProfile = false;
  const contextValues = { userProfile };
  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("context must be applied with MyAppContextProvider");
  }
  return context;
};

export default MyAppContextProvider;
