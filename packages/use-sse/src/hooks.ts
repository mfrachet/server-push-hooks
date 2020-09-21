import { useContext, useEffect, useRef, useState } from "react";
import { SSEContext } from "./context";

export const useLastSSE = (onOpen?: (e: Event) => void) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const eventSource = useContext(SSEContext);

  useEffect(() => {
    eventSource.onmessage = e => {
      setData(JSON.parse(e.data));
    };

    if (onOpen) {
      eventSource.onopen = onOpen;
    }

    eventSource.onerror = e => {
      setError(e);
    };

    return () => eventSource.close();
  }, [onOpen]);

  return { data, error };
};

export const useSSE = (
  onMessage: (data: JSON) => void,
  onOpen?: (e: Event) => void
) => {
  const [error, setError] = useState(undefined);
  const onMessageRef = useRef(undefined);

  onMessageRef.current = onMessage;

  const eventSource = useContext(SSEContext);

  useEffect(() => {
    eventSource.onmessage = e => {
      onMessageRef.current(JSON.parse(e.data));
    };

    if (onOpen) {
      eventSource.onopen = onOpen;
    }

    eventSource.onerror = e => {
      setError(e);
    };

    return () => eventSource.close();
  }, []);

  return error;
};
