import * as React from "react";
import io from "socket.io-client";
import { SocketIOContext } from "./context";

export interface ISocketIOProviderProps {
  url: string;
  opts?: SocketIOClient.ConnectOpts;
  onConnect?: (socket: SocketIOClient.Socket) => void;
  onDisconnect?: (socket: SocketIOClient.Socket, reason: string) => void;
}

export const SocketIOProvider: React.FC<ISocketIOProviderProps> = ({
  url,
  opts,
  onConnect,
  onDisconnect,
  children,
}) => {
  const [socket, setSocket] = React.useState<SocketIOClient.Socket>(null);

  if (typeof window === "undefined") {
    return <>{children}</>;
  }

  React.useEffect(() => {
    const mySocket = io(url, opts || {});

    mySocket.on("connect", () => {
      onConnect(mySocket);
    });

    mySocket.on("disconnect", (reason) => {
      onDisconnect(mySocket, reason);
    });

    setSocket(mySocket);

    return () => {
      mySocket.disconnect();
    };
  }, []);

  if (!socket) {
    return null;
  }

  return (
    <SocketIOContext.Provider value={socket}>
      {children}
    </SocketIOContext.Provider>
  );
};
