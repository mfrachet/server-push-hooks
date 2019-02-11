import { useContext, useEffect } from "react";
import { Context } from "./context";

export function useSocket(eventKey, callback) {
  const socket = useContext(Context);

  useEffect(() => {
    if (eventKey && callback) {
      socket.on(eventKey, callback);

      return () => socket.removeListener(eventKey, setValue);
    }
  }, []);

  return socket;
}
