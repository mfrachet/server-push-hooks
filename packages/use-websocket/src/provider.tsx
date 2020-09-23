import * as React from "react";
import { SSEContext } from "./context";

export interface ISSEProviderProps {
  url: string;
  opts?: EventSourceInit;
  onOpen?: (ev: Event) => void;
}

export const SSEProvider: React.FC<ISSEProviderProps> = ({
  url,
  opts,
  children,
  onOpen,
}) => {
  const eventSourceRef = React.useRef<EventSource>();
  const onOpenRef = React.useRef<(ev: Event) => void>();

  if (!window) {
    return <>{children}</>;
  }

  if (!eventSourceRef.current) {
    eventSourceRef.current = new EventSource(url, opts);
  }

  onOpenRef.current = onOpen;

  React.useEffect(() => {
    if (onOpenRef?.current) {
      eventSourceRef.current.onopen = onOpenRef.current;
    }

    return () => {
      eventSourceRef?.current?.close();
    };
  }, []);

  return (
    <SSEContext.Provider value={eventSourceRef.current}>
      {children}
    </SSEContext.Provider>
  );
};
