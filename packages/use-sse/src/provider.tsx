import * as React from "react";
import { SSEContext } from "./context";

export interface ISSEProviderProps {
  url: string;
  opts?: EventSourceInit;
}

export const SSEProvider: React.FC<ISSEProviderProps> = ({
  url,
  opts,
  children,
}) => {
  const eventSourceRef = React.useRef<EventSource>();

  if (!window) {
    return <>{children}</>;
  }

  if (!eventSourceRef.current) {
    eventSourceRef.current = new EventSource(url, opts);
  }

  return (
    <SSEContext.Provider value={eventSourceRef.current}>
      {children}
    </SSEContext.Provider>
  );
};
