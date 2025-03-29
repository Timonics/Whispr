import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("context must be applied with AuthProvider");
  }
  return context;
};

export default useAuth;