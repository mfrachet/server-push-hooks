import { useContext, useState, useEffect } from "react";
import { Context } from "./context";

export function useSocket(eventKey) {
  const socket = useContext(Context);

  const [value, setValue] = useState();

  useEffect(() => {
    socket.on(eventKey, setValue);

    return () => socket.removeListener(eventKey, setValue);
  }, []);

  return [value, socket];
}
