import React, { useRef } from "react";
import io from "socket.io-client";
import { SocketIOContext } from "./context";

export interface ISocketIOProviderProps {
  url: string;
  opts?: SocketIOClient.ConnectOpts;
}

export const SocketIOProvider: React.FC<ISocketIOProviderProps> = ({
  url,
  opts,
  children
}) => {
  const socketRef = useRef(io(url, opts || {}));

  return (
    <SocketIOContext.Provider value={socketRef.current}>
      {children}
    </SocketIOContext.Provider>
  );
};
