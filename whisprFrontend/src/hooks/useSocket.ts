import { useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("context must be applied with ApiProvider");
  }
  return context;
};

export default useSocket;
