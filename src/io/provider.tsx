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
  children,
}) => {
  if (!window) {
    return <>{children}</>;
  }

  const socketRef = useRef<SocketIOClient.Socket>();

  if (!socketRef.current) {
    socketRef.current = io(url, opts || {});
  }

  return (
    <SocketIOContext.Provider value={socketRef.current}>
      {children}
    </SocketIOContext.Provider>
  );
};
