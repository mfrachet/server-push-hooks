import { useContext, useEffect, useState } from "react";
import { SSEContext } from "./context";

export const useLastSSE = () => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const eventSource = useContext(SSEContext);

  useEffect(() => {
    eventSource.onmessage = e => {
      setData(JSON.parse(e.data));
    };

    eventSource.onopen = () => {
      // tslint:disable-next-line:no-console
      console.log("Opened");
    };

    eventSource.onerror = e => {
      setError(e);
    };
  }, []);

  return { data, error };
};
