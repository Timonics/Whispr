import React from "react";
import { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SocketState } from "../interfaces/socket";
import { MyAppProps } from "../interfaces";
import useAuth from "../hooks/useAuth";

export const SocketContext = createContext<SocketState | null>(null);

const SocketProvider: React.FC<MyAppProps> = ({ children }) => {
  const { userProfile } = useAuth();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  useEffect(() => {
    if (!userProfile?._id) return;

    const socketInstance = io("http://localhost:5002");
    setSocket(socketInstance);

    socketInstance.emit("userConnected", userProfile._id);

    socketInstance.on("updatedOnlineUsers", (onlineUsers: string[]) => {
      setOnlineUsers(onlineUsers);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [userProfile?._id]);

  const contextValues = { socket, onlineUsers };

  return (
    <SocketContext.Provider value={contextValues}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
