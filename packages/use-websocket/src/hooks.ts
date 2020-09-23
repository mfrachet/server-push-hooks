import { useContext, useEffect, useRef, useState } from "react";
import { WebsocketContext } from "./context";

export const useLastWebsocketMessage = () => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const ws = useContext(WebsocketContext);

  useEffect(() => {
    ws.onmessage = (e) => {
      let data;

      try {
        data = JSON.parse(e.data);
      } catch {
        data = e.data;
      }

      setData(data);
    };

    ws.onerror = (e) => {
      setError(e);
    };
  }, []);

  return { data, error, ws };
};

export const useWebsocket = (onMessage: (data: JSON) => void) => {
  const [error, setError] = useState(undefined);
  const onMessageRef = useRef(undefined);

  onMessageRef.current = onMessage;

  const ws = useContext(WebsocketContext);

  useEffect(() => {
    ws.onmessage = (e) => {
      let data;

      try {
        data = JSON.parse(e.data);
      } catch {
        data = e.data;
      }

      onMessageRef.current(data);
    };

    ws.onerror = (e) => {
      setError(e);
    };
  }, []);

  return { error, ws };
};
