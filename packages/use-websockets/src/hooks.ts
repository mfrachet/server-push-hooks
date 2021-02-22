import { useContext, useEffect, useRef, useState } from "react";
import { WebsocketContext } from "./context";

export const useLastWebsocketMessage = () => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const ws = useContext(WebsocketContext);

  useEffect(() => {
    ws.onmessage = (e) => {
      let message;

      try {
        message = JSON.parse(e.data);
      } catch {
        message = e.data;
      }

      setData(message);
    };

    ws.onerror = (e) => {
      setError(e);
    };
  }, []);

  return { data, error, ws };
};

export const useWebsocket = <T extends unknown>(onMessage: (data: T) => void) => {
  const [error, setError] = useState(undefined);
  const onMessageRef = useRef(undefined);

  onMessageRef.current = onMessage;

  const ws = useContext(WebsocketContext);

  useEffect(() => {
    ws.onmessage = (event) => {
      let message;

      try {
        message = JSON.parse(event.data);
      } catch {
        message = event.data;
      }

      onMessageRef.current(message);
    };

    ws.onerror = (e) => {
      setError(e);
    };
  }, []);

  return { error, ws };
};
