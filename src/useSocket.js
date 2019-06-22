import { useContext, useEffect, useRef } from "react";
import { Context } from "./context";

export function useSocket(eventKey, callback) {
  const socket = useContext(Context);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (eventKey) {
      function socketHandler() {
        callbackRef.current && callbackRef.current.apply(this, arguments);
      }

      socket.on(eventKey, socketHandler);
      return () => socket.removeListener(eventKey, socketHandler);
    }
  }, [eventKey]);

  return socket;
}
