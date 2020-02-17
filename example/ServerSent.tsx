import React from "react";

export const ServerSent = () => {
  const eventSourceRef = React.useRef(
    new EventSource("http://localhost:3000/server-sent")
  );

  React.useEffect(() => {
    eventSourceRef.current.onmessage = e => {
      // tslint:disable-next-line:no-console
      console.log("onmessage", e);
    };

    eventSourceRef.current.onopen = () => {
      // tslint:disable-next-line:no-console
      console.log("Opened");
    };

    eventSourceRef.current.onerror = () => {
      // tslint:disable-next-line:no-console
      console.error("Error !");
    };
  }, []);

  return <div>Hello server sent</div>;
};
