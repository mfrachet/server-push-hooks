import * as React from "react";
import { WebsocketContext } from "./context";

export interface IWebSocketProviderProps {
  url: string;
  protocols?: string | string[];
  onOpen?: (ev: Event) => void;
}

export const WebSocketProvider: React.FC<IWebSocketProviderProps> = ({
  url,
  protocols,
  children,
  onOpen,
}) => {
  const ws = React.useRef<WebSocket>();
  const onOpenRef = React.useRef<(ev: Event) => void>();

  if (!window) {
    return <>{children}</>;
  }

  if (!ws.current) {
    ws.current = new WebSocket(url, protocols);
  }

  onOpenRef.current = onOpen;

  React.useEffect(() => {
    if (onOpenRef?.current) {
      ws.current.onopen = onOpenRef.current;
    }

    return () => {
      ws?.current?.close();
    };
  }, []);

  return (
    <WebsocketContext.Provider value={ws.current}>
      {children}
    </WebsocketContext.Provider>
  );
};
