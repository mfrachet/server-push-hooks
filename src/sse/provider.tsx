import React, { useRef } from "react";
import { SSEContext } from "./context";

export interface ISSEProviderProps {
  url: string;
  opts?: EventSourceInit;
}

export const SSEProvider: React.FC<ISSEProviderProps> = ({
  url,
  opts,
  children
}) => {
  if (!window) {
    return null;
  }

  const eventSourceRef = useRef(new EventSource(url, opts));

  return (
    <SSEContext.Provider value={eventSourceRef.current}>
      {children}
    </SSEContext.Provider>
  );
};
